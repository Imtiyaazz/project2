import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>School Days</h1>
      <div className="sub">
        <h5>School Friends</h5>
        <ol>
          <li>Shahrukh</li>
          <li>Adnan</li>
          <li>Avinash</li>
          <li>Owez</li>
        </ol>
      </div>
      <div className="sub">
        <h5>School Routine</h5>
        <ol type="a">
          <li>I used to woke up early </li>
          <li>I use to Brush my teath</li>
          <li>I use to take bath</li>
          <li>I use to take breakfast</li>
          <li>I use to catch my school bus</li>
          <li>i use to study at school</li>
          <li>I use to come by bus</li>
        </ol>
      </div>
      <div className="sub">
        <h5>Sports</h5>
        <ol>
          <li>Football</li>
          <li>Cricket</li>
          <li>Kho-Kho</li>
          <li>Hockey</li>
        </ol>
      </div>
      <div className="sub">
        <h5>Books</h5>
        <ol>
          <li>Literature</li>
          <li>Maths</li>
          <li>Science</li>
          <li>Geography</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
