import './App.css'
import axios from 'axios'

function App() {

  //función async-await para consumir API
  const getUsers = async() =>{
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/"); //estamos tomando al usuario 3, si queremos todos se lo quitamos 
      console.log(response);
      console.log(response.data[1]);//Ouput: data de "Ervin Howell"
      console.log(response.data[1].name);//ouput: "Ervin Howell"

    }catch(error){
      console.log("Peligro!", error);
    }
  }

  //Función async-await para enviar un usuario 

  const postUser = async () => {
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const user = {
        userId:1998,
        title: "Java FullStack Dev",
        body: "Lizbeth Cerón"
      }
      const response = await axios.post(url, user)
      console.log(response);
//Para mostrar solamente la información en consola
      console.log(response.data);
  }catch(error) {
    console.log("Peligro!", error);
  }
}



  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
