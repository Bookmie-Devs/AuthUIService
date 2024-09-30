document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("kolo");
  //   const span = document.getElementById("close");
  const fromDiv = document.getElementById("form-div");

  btn.onclick = () => {
    fromDiv.innerHTML = `
    <div id="modal" style="display:inline; position:fixed; z-index:1; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rgba(0,0,0,0.4);">
        <div style="background-color:red; margin:15% auto; padding:20px; border:1px solid #888; width:80%;">
            <button onclick="document.getElementById('form-div').style.display='none'" id="close" style="color:#aaa; float:right; font-size:28px; font-weight:bold; cursor:pointer;">&times;</button>
            <h2>Form Title</h2>
            <form id="myForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>`;
  };

  //   span.onclick = () => {
  //     modal.style.display = "none";
  //   };

  //   document.getElementById("close").onclick = (event) => {
  //     console.log("sksk");
  //   };

  //   document.getElementById("myForm").onsubmit = (event) => {
  //     event.preventDefault();
  //     const name = document.getElementById("name").value;
  //     const email = document.getElementById("email").value;
  //     alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
  //     modal.style.display = "none"; // Close the modal
  //   };
});
