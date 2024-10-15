document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("kolo");
  //   const span = document.getElementById("close");
  const fromDiv = document.getElementById("form-div");

  btn.onclick = () => {
    fromDiv.innerHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div
      id="modal"
      style="
        display: inline;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-width: 20px;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      "
    >
      <div
        style="
          background-color: rgb(224, 224, 224);
          margin: 15% auto;
          border-radius: 20px;
          padding: 10px;
          border: 1px solid #888;
          width: 80%;
        "
      >
        <button
          onclick="document.getElementById('form-div').style.display='none'"
          id="close"
          style="
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            border: none;
            cursor: pointer;
          "
        >
          &times;
        </button>
        <h3
          style="
            text-align: center;
            font-family: monospace;
            text-decoration: underline;
          "
        >
          <a style="text-decoration: none; color: #141727" href="">
            AuthUi Service
          </a>
        </h3>
        <form id="auth-ui-form" method="POST" action="127.0.0.1:8000/login/">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </body>
</html>`;

    document.getElementById("auth-ui-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      console.log(form);
      alert("submitted");
    });
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
