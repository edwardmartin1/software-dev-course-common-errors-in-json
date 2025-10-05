/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

//corrected version
const invalidBookingJSON = `
{
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15",
    "checkOutDate": "2024-05-20",
    "guests":
    [
        {
            "name": "Alice Johnson",
            "age": 30,
            "email": "alice.johnson@example.com"
        },
        {
            "name": "Bob Smith",
            "age": null,
            "email": "bob.smith@example"
        }
    ],
        "roomDetails":
    {
        "type": "Suite",
        "pricePerNight": 200,
        "amenities": ["WiFi", "Breakfast", "Parking"]
    }
}
`;



//original version
const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15"
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/

//On the following line, the final comma is not needed so I removed it
//"amenities": ["WiFi", "Breakfast", "Parking",]

//On the following line, undefined is not a valid value in JSON so I replace it with null
//"age": undefined,

//On the following line, there should be a comma at the end of the line so I added one
//"checkInDate": "2024-05-15"

//On the following line, name should be in double quotes so I added them
//name: "Alice Johnson",



// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I copied the JSON into Visual Studio Code and reviewed the issues that VS Code found.

2️⃣ How did you confirm that your corrected JSON file was valid?

I utilized jsonlint.com to review the final version of the JSON.

3️⃣ Which errors were the most difficult to spot? Why?

Checking for invalid data types like undefined.  It is difficult to spot because 
undefined is valid in JavaScript but not valid in JSON.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

 I would start with the JSON validator to check for common syntax errors.
 Next I would use a code editor to review and format the JSON.
 Next I would test the JSON in the API to verify functionality.
 Then I would iterate, fix errors and repeat the process until the JSON
 is error-free.

*/
