import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

const notes = [
  { _id: 1, title: "cool title here", category: "A", content: "some content", createdAt: "Some date here" },
];

const WithToggle = () => {
  return (
    <div>
      WithToggle
      {notes &&
        notes
          .filter((filteredNote) => filteredNote.title.toLowerCase().includes(search.toLowerCase()))
          .reverse()
          .map((note) => (
            <Accordion>
              <Card style={{ margin: 10 }} key={note._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                      {note.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on <cite title="Source Title">{note.createdAt}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </div>
  );
};

export default WithToggle;
