document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("kolo");
  //   const span = document.getElementById("close");
  const fromDiv = document.getElementById("form-div");

  btn.onclick = () => {
    fromDiv.innerHTML = `{{context}}`;

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
