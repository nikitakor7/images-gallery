import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import ImageCard from "./components/ImageCard.js";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteImage(id){
    function doCompare(image) {
      return id != image.id;
    }
    setImages(images.filter(doCompare));
  }
  console.log(process.env);
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {!!images.length && images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard key={i} image={image} deleteImage={handleDeleteImage}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
