import React  from 'react';
import { Card, CardHeader, CardBody, Row, Col ,Table , CardTitle} from "reactstrap";

function Output_panel(props){
  
    const trs = props.result.map((result,i) => (
      <tr key={result}>
        <td>{i + 1}</td>
        <td>{result['WORD']}</td>
        <td>{result['COUNTS']}</td>
        <td>{result['IMPUTATION']}</td>
      </tr>
  ));
  return(
    <Row>
      <Col md="12">
            <Card style={{background:'transparent'}}>
              <CardHeader>
                <CardTitle tag="h4">Result</CardTitle>
              </CardHeader>
              <CardBody style={{maxHeight : '300px',overflow : 'scroll'}}>
                <Table className="tablesorter" responsive >
                  <thead className="text-primary">
                    <tr>
                      <th>No</th>
                      <th>KeyWord</th>
                      <th>Counts</th>
                      <th>Imputation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* display results */}
                    {trs}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
      
    </Row>
  );
};

export default Output_panel;
