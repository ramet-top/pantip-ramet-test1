import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormControl,
  Row,
  Container,
  ListGroup
} from "react-bootstrap";
import Fuse from "fuse.js";
import axios from "axios";

const PantipLists = () => {
  var books = [
    {
      title: "Old Man's War",
      author: "John Scalzi",
      tags: ["fiction"]
    },
    {
      title: "The Lock Artist",
      author: "Steve",
      tags: ["thriller"]
    }
  ];

  const [lists, setLists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("ดูไบ");
  const [url, setUrl] = useState(
    "http://www.mocky.io/v2/5e1d24dd3600005a00c73e8c"
  );

  const fetchLists = () => {
    axios
      .get(url)
      .then(res => {
        setLists(res.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchLists();
  }, [searchQuery]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    var options = {
      keys: ["title", "tag"]
    };
    var fuse = new Fuse(lists, options);

    let res = fuse.search(searchQuery);

    // setLists(res);
    console.log(res);
  };

  return (
    <Container>
      <br />
      <hr />
      <h5>
        1.3 Search List with color api =
        http://www.mocky.io/v2/5e1d24dd3600005a00c73e8c
      </h5>
      <br />
      <Row className="justify-content-center">
        <p> มี data ออก console เหลือเทียบค่าใน array</p>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            value={searchQuery}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
        <Container>
          <br />
          {lists.map((n, i) => (
            <ListGroup variant="flush" as="ul" key={i}>
              <ListGroup.Item as="li" action>
                {n.title}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Container>
      </Row>
    </Container>
  );
};
export default PantipLists;
