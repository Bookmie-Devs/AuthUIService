module.exports.displayLoginForms = async function (req, res) {
  const { project_id } = req.params;
  // const forms = [5, 3, 53, 35, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const forms = [
    {
      id: 1,
      title: "Basic Signup Form",
      description:
        "A simple form for user registration with name and email fields.",
      previewImage: "/images/form-preview1.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview1.jpg" alt="Basic Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Basic Signup Form</h2>
                    <p class="mt-2 text-gray-600">A simple form for user registration with name and email fields.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="1" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 2,
      title: "Detailed Signup Form",
      description:
        "A detailed form that includes additional fields like address and phone number.",
      previewImage: "/images/form-preview2.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview2.jpg" alt="Detailed Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Detailed Signup Form</h2>
                    <p class="mt-2 text-gray-600">A detailed form that includes additional fields like address and phone number.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="2" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 3,
      title: "Social Media Signup Form",
      description:
        "A signup form that allows users to register using social media accounts.",
      previewImage: "/images/form-preview3.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview3.jpg" alt="Social Media Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Social Media Signup Form</h2>
                    <p class="mt-2 text-gray-600">A signup form that allows users to register using social media accounts.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="3" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 4,
      title: "Newsletter Signup Form",
      description: "A compact form for subscribing to newsletters.",
      previewImage: "/images/form-preview4.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview4.jpg" alt="Newsletter Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Newsletter Signup Form</h2>
                    <p class="mt-2 text-gray-600">A compact form for subscribing to newsletters.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="4" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 5,
      title: "Feedback Form",
      description: "A form to gather user feedback and suggestions.",
      previewImage: "/images/form-preview5.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview5.jpg" alt="Feedback Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Feedback Form</h2>
                    <p class="mt-2 text-gray-600">A form to gather user feedback and suggestions.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="5" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 6,
      title: "Event Registration Form",
      description: "A form for registering participants for events.",
      previewImage: "/images/form-preview6.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview6.jpg" alt="Event Registration Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Event Registration Form</h2>
                    <p class="mt-2 text-gray-600">A form for registering participants for events.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="6" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 7,
      title: "Job Application Form",
      description: "A form for job seekers to apply for positions.",
      previewImage: "/images/form-preview7.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview7.jpg" alt="Job Application Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Job Application Form</h2>
                    <p class="mt-2 text-gray-600">A form for job seekers to apply for positions.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="7" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 8,
      title: "Membership Signup Form",
      description: "A form for users to become members of a service.",
      previewImage: "/images/form-preview8.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview8.jpg" alt="Membership Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Membership Signup Form</h2>
                    <p class="mt-2 text-gray-600">A form for users to become members of a service.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="8" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 9,
      title: "Course Enrollment Form",
      description: "A form for enrolling in educational courses.",
      previewImage: "/images/form-preview9.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview9.jpg" alt="Course Enrollment Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Course Enrollment Form</h2>
                    <p class="mt-2 text-gray-600">A form for enrolling in educational courses.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="9" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 10,
      title: "Contact Us Form",
      description: "A form for users to reach out for inquiries.",
      previewImage: "/images/form-preview10.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview10.jpg" alt="Contact Us Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Contact Us Form</h2>
                    <p class="mt-2 text-gray-600">A form for users to reach out for inquiries.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="10" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 11,
      title: "Product Feedback Form",
      description: "A form to collect feedback on products.",
      previewImage: "/images/form-preview11.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview11.jpg" alt="Product Feedback Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Product Feedback Form</h2>
                    <p class="mt-2 text-gray-600">A form to collect feedback on products.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="11" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 12,
      title: "Survey Form",
      description: "A form to conduct surveys and gather opinions.",
      previewImage: "/images/form-preview12.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview12.jpg" alt="Survey Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Survey Form</h2>
                    <p class="mt-2 text-gray-600">A form to conduct surveys and gather opinions.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="12" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 13,
      title: "Donation Form",
      description: "A form for collecting donations for a cause.",
      previewImage: "/images/form-preview13.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview13.jpg" alt="Donation Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Donation Form</h2>
                    <p class="mt-2 text-gray-600">A form for collecting donations for a cause.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="13" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 14,
      title: "Subscription Form",
      description: "A form for subscribing to updates or newsletters.",
      previewImage: "/images/form-preview14.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview14.jpg" alt="Subscription Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Subscription Form</h2>
                    <p class="mt-2 text-gray-600">A form for subscribing to updates or newsletters.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="14" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 15,
      title: "Volunteer Signup Form",
      description: "A form for signing up as a volunteer.",
      previewImage: "/images/form-preview15.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview15.jpg" alt="Volunteer Signup Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Volunteer Signup Form</h2>
                    <p class="mt-2 text-gray-600">A form for signing up as a volunteer.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="15" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 16,
      title: "Application Form",
      description: "A generic application form for various purposes.",
      previewImage: "/images/form-preview16.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview16.jpg" alt="Application Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Application Form</h2>
                    <p class="mt-2 text-gray-600">A generic application form for various purposes.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="16" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
    {
      id: 17,
      title: "Custom Form",
      description: "A customizable form tailored to specific needs.",
      previewImage: "/images/form-preview17.jpg",
      html: `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-32 object-cover" src="/images/form-preview17.jpg" alt="Custom Form" />
                <form class="p-4" method="POST" action="/projects/select-project-signup-form">
                    <h2 class="text-xl font-semibold text-gray-800">Custom Form</h2>
                    <p class="mt-2 text-gray-600">A customizable form tailored to specific needs.</p>
                    <input type="hidden" name="project_id" value="{{ project_id }}" />
                    <input type="hidden" name="signup_form_id" value="17" />
                    <button type="submit" class="mt-4 block text-center w-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium rounded-lg px-4 py-2">Select Form</button>
                </form>
            </div>
        `,
    },
  ];

  const context = { project_id, forms };
  return res.render("login_forms", context);
};

module.exports.displaySignUpForms = async function (req, res) {
  const { project_id } = req.params;
  const forms = [5, 3, 53, 35, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const context = { project_id, forms };
  return res.render("signup_forms", context);
};

// module.exports.addForm = async function (req, res) {
//   if (req.)
//   return res.render("add_forms");
// };
