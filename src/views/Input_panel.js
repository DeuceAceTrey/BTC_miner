import React ,{useState} from 'react';
import Dropzone from "./Dropzone";
// reactstrap components
import { Row, Col ,Button,Input,Modal,ModalHeader,ModalBody} from "reactstrap";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import CustomModal from './CustomModal';
// import ReactExport from "react-export-excel";
function Input_panel(props){
    
    const [isLoading , setIsLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [downloadName, setDownloadName] = useState('');
    const [result,setResult] = useState([]);
    const [modal, setmodal] = React.useState(false);
    const [mclass,setMclass] = useState('')
    const [alert,setAlert] = useState('')
    // const changeURL = (e) => {
    //   setUrl(e.target.value);
    //   if(e.keyCode === '13')
    //     searchURL();
    // }
    const searchURL = () => {
      console.log(url);
      if(url !== '' )
      {
        // const formData = new FormData();
        // formData.append("url",url);
        //formData.append("file", libraryFile);
        setIsLoading(true);
        fetch('https://litigationbot.com/server/data/search', {
            method: 'POST',
            mode : 'cors',
            body: JSON.stringify({'url' : url}),
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(response => response.json()).then(res => 
        {
          props.getResult(res.data);
          setResult(res.data);
          setIsLoading(false);
          setMclass('modal-success');
          setAlert('Successfully Searched')
          setmodal(!modal)
        })
      }
      else
      {
        setMclass('modal-warning');
        setAlert('Please insert URL or Word Library File')
        setmodal(!modal)
      }
    }

    const searchText = () => {
      console.log(text);
      if(text !== '' )
      {
        // const formData = new FormData();
        // formData.append("url",url);
        //formData.append("file", libraryFile);
        setIsLoading(true);
        fetch('http://locahost:5000/data/searchByText', {
            method: 'POST',
            mode : 'cors',
            body: JSON.stringify({'text' : text}),
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(response => response.json()).then(res => 
        {
          props.getResult(res.data);
          setResult(res.data);
          setIsLoading(false);
          setMclass('modal-success');
          setAlert('Successfully Searched')
          setmodal(!modal)
        })
      }
      else
      {
        setMclass('modal-warning');
        setAlert('Please insert Text.')
        setmodal(!modal)
      }
    }
    
    const download = () => {
      if(downloadName !== '')
      {
        const ws = XLSX.utils.json_to_sheet(result);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
        FileSaver.saveAs(data, downloadName + '.xlsx');
        
      }
      else
      {
        setMclass('modal-warning');
        setAlert('Please insert Download file name')
        setmodal(!modal)
      }
    }
    
    // const getFile = (file) => {
    //   setLibraryFile(file);
    // }

    

    return(
      
      <Row >
        <Col md="12">
          <h5>Please Enter the URL you want to analyse</h5>
        </Col>
        <Col md="6">
          
          <Input type="url" onChange={(e)=>setUrl(e.target.value)}  value={url} />
          
        </Col>
        {/* <Col md="12">
          <Dropzone getFileList={setLibraryFile} />
        </Col> */}
        <Col md ="3">
          <Row>
          <Button className="btn-fill" color="success" onClick={()=>searchURL()} style={{display: isLoading ? 'none' : 'block',backgroundImage:'linear-gradient(to bottom left, #CBA557, #CBA557, #CBA557)' }}>
                    Search By URL
          </Button>
          <h5 style={{display: isLoading ? 'block' : 'none' }}>
              Searching Now ..... Just a moment
          </h5>
          </Row>
        </Col>
        <Col md="12">
          <h5>Please Enter the Text you want to analyse</h5>

        </Col>
        <Col md="8">
          <Input type="textarea" rows='6' onChange={(e)=>setText(e.target.value)}  value={text} style={{maxHeight:'250px'}}/>          
        </Col>
        <Col md ="2">
          <Row style={{height:'100%',verticalAlign:'middle',alignItems:'center'}}>
          <Button className="btn-fill" color="success" onClick={()=>searchText()} style={{display: isLoading ? 'none' : 'block' ,backgroundImage:'linear-gradient(to bottom left, #CBA557, #CBA557, #CBA557)'}}>
                    Search By Text
          </Button>
          <h5 style={{display: isLoading ? 'block' : 'none' }}>
              Searching Now ..... Just a moment
          </h5>
          </Row>
        </Col>
        <Col md="6">
          <Input type="text" onChange={(e)=>setDownloadName(e.target.value)}  value={downloadName} placeholder="Insert Download FileName Here" style={{marginTop:'30px'}}/>
        </Col>
        <Col md="3">
          <Button className="btn-fill" color="danger" onClick={()=>download()} style={{marginTop:'30px',backgroundImage:'linear-gradient(to bottom left, coral,coral,coral)'}}>
                    Download
          </Button>
        </Col>
        <CustomModal
          modal_class = {mclass}
          handleModal = {setmodal}
          alert_string = {alert}
          isModal = {modal}
        />
      </Row>
      

    );
    
    
  };

  export default Input_panel;