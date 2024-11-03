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
<!-- Modal Background -->
<div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
  <!-- Modal Content -->
  <div class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8">
    <form id="auth-ui-form" action="" method="POST">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input name="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
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
});
