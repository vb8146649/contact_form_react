import Consent from "./component/Consent";
import Input from "./component/Input";
import Radio from "./component/Radio";
import TextArea from "./component/TextArea";
import logo from "./logo.svg";
import toast ,{Toaster} from "react-hot-toast";
import "./output.css";

function App() {
  const style={
    'cols':"col-span-2",
    'rows':"row-span-2",
  }

  function onSubmit(e){
    e.preventDefault();
    return toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md p-4 w-full font-karla bg-[hsl(169,82%,27%)] text-white shadow-lg rounded-lg`}
        >
          <span className="font-bold mb-3 block content-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="me-3 inline-block" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/></svg>
          Message sent!
          </span>
          Thanks for completing the form. We'll be in touch soon!
        </div>
      ),{
        duration:1000,
        removeDelay:500,
      });      
  }
  return (
    <>
    <form
      onSubmit={onSubmit}
      className="p-7 bg-white font-karla rounded-xl"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "repeat(8,minmax(4rem,min-content))",
        gridColumnGap: "0.5rem",
      }}
    >
      <h1 className="text-3xl font-bold col-span-2">Contact Us</h1>
      <Input label="First Name" name="given-name"/>
      <Input label="Last Name" name="family-name"/>
      <Input label="Email Address" type="email" name="email" col={style.cols}/>
      <Radio />
      <TextArea/>
      <Consent />
      <button type="submit" className="w-full mt-3 p-2 hover:bg-green-900 bg-[hsl(169,82%,27%)] text-white font-bold rounded-xl col-span-2">SUBMIT</button>
    </form>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </>
  );
}

export default App;
