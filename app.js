
let score = 0;
const scoreDisplay = document.getElementById("score");

const hints = [
    {
        "name": "Hank",
        "dob": "1988-11-07",
        "address": "660 Park Blvd",
        "pet": "Zoe",
        "password": "Han88zo"
    },
    {
        "name": "Hank",
        "dob": "1987-11-10",
        "address": "676 Birch Dr",
        "pet": "Max",
        "password": "Han87ma"
    },
    {
        "name": "Diana",
        "dob": "2008-08-22",
        "address": "911 Elm St",
        "pet": "Rex",
        "password": "Dia08re"
    },
    {
        "name": "Bob",
        "dob": "1971-12-10",
        "address": "497 Maple Ln",
        "pet": "Duke",
        "password": "Bob71du"
    },
    {
        "name": "Bob",
        "dob": "1982-03-07",
        "address": "593 Maple Ln",
        "pet": "Duke",
        "password": "Bob82du"
    },
    {
        "name": "Charlie",
        "dob": "1974-10-21",
        "address": "551 Sunset St",
        "pet": "Fluffy",
        "password": "Cha74fl"
    },
    {
        "name": "Frank",
        "dob": "1982-01-22",
        "address": "853 Cedar Ct",
        "pet": "Chloe",
        "password": "Fra82ch"
    },
    {
        "name": "Hank",
        "dob": "1994-04-28",
        "address": "431 Birch Dr",
        "pet": "Max",
        "password": "Han94ma"
    },
    {
        "name": "Diana",
        "dob": "1970-04-19",
        "address": "960 Sunset St",
        "pet": "Duke",
        "password": "Dia70du"
    },
    {
        "name": "Jack",
        "dob": "1980-06-05",
        "address": "440 Elm St",
        "pet": "Rex",
        "password": "Jac80re"
    },
    {
        "name": "Frank",
        "dob": "1981-01-16",
        "address": "565 Maple Ln",
        "pet": "Luna",
        "password": "Fra81lu"
    },
    {
        "name": "Hank",
        "dob": "2003-03-26",
        "address": "358 Park Blvd",
        "pet": "Fluffy",
        "password": "Han03fl"
    },
    {
        "name": "Eve",
        "dob": "2008-09-18",
        "address": "216 Park Blvd",
        "pet": "Bella",
        "password": "Eve08be"
    },
    {
        "name": "Hank",
        "dob": "1980-12-01",
        "address": "415 Maple Ln",
        "pet": "Luna",
        "password": "Han80lu"
    },
    {
        "name": "Alice",
        "dob": "1993-12-04",
        "address": "245 Pine Rd",
        "pet": "Duke",
        "password": "Ali93du"
    },
    {
        "name": "Jack",
        "dob": "1999-03-14",
        "address": "173 Pine Rd",
        "pet": "Rex",
        "password": "Jac99re"
    },
    {
        "name": "Charlie",
        "dob": "2002-02-27",
        "address": "128 Oak Ave",
        "pet": "Rocky",
        "password": "Cha02ro"
    },
    {
        "name": "Jack",
        "dob": "1997-04-21",
        "address": "255 Birch Dr",
        "pet": "Luna",
        "password": "Jac97lu"
    },
    {
        "name": "Bob",
        "dob": "1982-09-25",
        "address": "123 Oak Ave",
        "pet": "Rex",
        "password": "Bob82re"
    },
    {
        "name": "Frank",
        "dob": "2004-04-20",
        "address": "778 Main St",
        "pet": "Max",
        "password": "Fra04ma"
    },
    {
        "name": "Frank",
        "dob": "1977-02-25",
        "address": "414 Birch Dr",
        "pet": "Duke",
        "password": "Fra77du"
    },
    {
        "name": "Hank",
        "dob": "1979-01-11",
        "address": "236 Sunset St",
        "pet": "Zoe",
        "password": "Han79zo"
    },
    {
        "name": "Ivy",
        "dob": "1989-10-06",
        "address": "707 Pine Rd",
        "pet": "Rex",
        "password": "Ivy89re"
    },
    {
        "name": "Bob",
        "dob": "1989-12-27",
        "address": "838 Sunset St",
        "pet": "Bella",
        "password": "Bob89be"
    },
    {
        "name": "Frank",
        "dob": "1970-09-12",
        "address": "554 Willow Way",
        "pet": "Rex",
        "password": "Fra70re"
    },
    {
        "name": "Charlie",
        "dob": "1989-07-23",
        "address": "798 Cedar Ct",
        "pet": "Bella",
        "password": "Cha89be"
    },
    {
        "name": "Eve",
        "dob": "1981-10-15",
        "address": "731 Maple Ln",
        "pet": "Luna",
        "password": "Eve81lu"
    },
    {
        "name": "Bob",
        "dob": "1988-06-10",
        "address": "188 Willow Way",
        "pet": "Luna",
        "password": "Bob88lu"
    },
    {
        "name": "Alice",
        "dob": "1998-06-15",
        "address": "110 Oak Ave",
        "pet": "Luna",
        "password": "Ali98lu"
    },
    {
        "name": "Diana",
        "dob": "1994-07-01",
        "address": "658 Main St",
        "pet": "Duke",
        "password": "Dia94du"
    },
    {
        "name": "Diana",
        "dob": "1978-09-10",
        "address": "881 Maple Ln",
        "pet": "Luna",
        "password": "Dia78lu"
    },
    {
        "name": "Jack",
        "dob": "1978-10-07",
        "address": "784 Sunset St",
        "pet": "Rex",
        "password": "Jac78re"
    },
    {
        "name": "Alice",
        "dob": "2004-12-17",
        "address": "634 Cedar Ct",
        "pet": "Zoe",
        "password": "Ali04zo"
    },
    {
        "name": "Bob",
        "dob": "2008-12-28",
        "address": "328 Elm St",
        "pet": "Rocky",
        "password": "Bob08ro"
    },
    {
        "name": "Grace",
        "dob": "1993-04-24",
        "address": "578 Park Blvd",
        "pet": "Milo",
        "password": "Gra93mi"
    },
    {
        "name": "Grace",
        "dob": "1971-11-12",
        "address": "188 Birch Dr",
        "pet": "Zoe",
        "password": "Gra71zo"
    },
    {
        "name": "Ivy",
        "dob": "2006-08-14",
        "address": "625 Sunset St",
        "pet": "Max",
        "password": "Ivy06ma"
    },
    {
        "name": "Jack",
        "dob": "1994-04-12",
        "address": "534 Birch Dr",
        "pet": "Luna",
        "password": "Jac94lu"
    },
    {
        "name": "Hank",
        "dob": "1995-08-26",
        "address": "754 Sunset St",
        "pet": "Max",
        "password": "Han95ma"
    },
    {
        "name": "Diana",
        "dob": "2000-06-02",
        "address": "916 Cedar Ct",
        "pet": "Rocky",
        "password": "Dia00ro"
    },
    {
        "name": "Eve",
        "dob": "2007-01-02",
        "address": "596 Willow Way",
        "pet": "Luna",
        "password": "Eve07lu"
    },
    {
        "name": "Grace",
        "dob": "2002-07-23",
        "address": "293 Sunset St",
        "pet": "Duke",
        "password": "Gra02du"
    },
    {
        "name": "Eve",
        "dob": "1994-02-04",
        "address": "490 Oak Ave",
        "pet": "Fluffy",
        "password": "Eve94fl"
    },
    {
        "name": "Grace",
        "dob": "1982-01-18",
        "address": "246 Park Blvd",
        "pet": "Zoe",
        "password": "Gra82zo"
    },
    {
        "name": "Hank",
        "dob": "2001-11-20",
        "address": "468 Maple Ln",
        "pet": "Bella",
        "password": "Han01be"
    },
    {
        "name": "Hank",
        "dob": "1978-04-27",
        "address": "880 Birch Dr",
        "pet": "Chloe",
        "password": "Han78ch"
    },
    {
        "name": "Grace",
        "dob": "1970-02-17",
        "address": "101 Park Blvd",
        "pet": "Fluffy",
        "password": "Gra70fl"
    },
    {
        "name": "Grace",
        "dob": "2005-10-26",
        "address": "725 Main St",
        "pet": "Rex",
        "password": "Gra05re"
    },
    {
        "name": "Charlie",
        "dob": "1992-07-09",
        "address": "839 Pine Rd",
        "pet": "Bella",
        "password": "Cha92be"
    },
    {
        "name": "Charlie",
        "dob": "1976-08-28",
        "address": "734 Sunset St",
        "pet": "Rex",
        "password": "Cha76re"
    }
];

let current;

const hintName = document.getElementById("hint-name");
const hintDob = document.getElementById("hint-dob");
const hintAddress = document.getElementById("hint-address");
const hintPet = document.getElementById("hint-pet");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const nextPasswordBtn = document.getElementById("next-password");
const guessBoxesContainer = document.getElementById("guess-boxes");

function createInputBoxes(length) {
    guessBoxesContainer.innerHTML = "";
    for (let i = 0; i < length; i++) {
        const input = document.createElement("input");
        input.setAttribute("maxlength", "1");
        input.setAttribute("data-index", i);
        guessBoxesContainer.appendChild(input);

        input.addEventListener("input", (e) => {
            if (e.inputType !== "deleteContentBackward" && e.target.value) {
                const next = guessBoxesContainer.querySelector(`input[data-index='${i + 1}']`);
                if (next) next.focus();
            }
        });
    }
}

function loadHints(index) {
    const hint = hints[index];
    hintName.textContent = `Name: ${hint.name}`;
    hintDob.textContent = `Date of Birth: ${hint.dob}`;
    hintAddress.textContent = `Address: ${hint.address}`;
    hintPet.textContent = `Pet Name: ${hint.pet}`;
    feedback.textContent = "";
    attempts = 0;
    attemptsDisplay.textContent = "Attempts: 0";
    nextPasswordBtn.style.display = "none";
    createInputBoxes(hint.password.length);
    scoreDisplay.textContent = `Score: ${score}`;
}

document.getElementById("submit-guess").addEventListener("click", () => {
    const inputs = [...guessBoxesContainer.querySelectorAll("input")];
    const guess = inputs.map(i => i.value).join("");
    const actualPassword = hints[current].password;

    if (guess.length !== actualPassword.length) {
        feedback.textContent = "⛔ Enter all characters.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    let correct = 0;
    let roundPoints = 0;

    inputs.forEach((input, idx) => {
        if (input.value === actualPassword[idx]) {
            if (!input.classList.contains("locked")) {
                input.classList.add("locked");
                input.disabled = true;
                roundPoints += 2;
            }
            correct++;
        } else {
            input.classList.remove("locked");
        }
    });

    if (correct === actualPassword.length) {
        roundPoints += 10;
        if (attempts === 1) {
            roundPoints += 5;
        }
        score += roundPoints;
        feedback.textContent = `✅ Correct! Password cracked! +${roundPoints} points`;
        nextPasswordBtn.style.display = "block";
    } else {
        score -= 1;
        feedback.textContent = "❌ Some characters are incorrect. Keep trying! (-1 point)";
    }

    scoreDisplay.textContent = `Score: ${score}`;
});

nextPasswordBtn.addEventListener("click", () => {
    current = Math.floor(Math.random() * hints.length);
    loadHints(current);
});

window.onload = () => {
    current = Math.floor(Math.random() * hints.length);
    loadHints(current);
};
