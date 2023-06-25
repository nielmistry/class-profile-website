let pages = [
    { "id": "index", "pretty_name": "Home" },
    { "id": "demographics", "pretty_name": "Demographics" },
    { "id": "school", "pretty_name": "School" },
    { "id": "co-op", "pretty_name": "Co-op" },
    { "id": "mental-health", "pretty_name": "Mental Health" },
    { "id": "lifestyle", "pretty_name": "Lifestyle" },
    { "id": "sdr", "pretty_name": "Sex, Drugs & Relationships" },
    { "id": "future-plans", "pretty_name": "Future Plans & Advice" },
    { "id": "conclusion", "pretty_name": "Conclusion" }
]

topBarElement = document.getElementById("topNavBar")

for (var page of pages) {
    if (page.id == "index") {
        continue
    }
    topBarElement.innerHTML += `<a class=\"nav-item nav-link\" href=\"${page.id}.html\" id=\"${page.id}-link\">${page.pretty_name}</a>`
}


let filename = document.getElementsByName("page-name")[0].getAttribute("content");
try {
    document.getElementById(filename + "-link").classList.add("active")
} catch {
    console.log("No filename!")
}

let idx_page = pages.findIndex(item => item.id === filename)

let prev_page = pages[idx_page - 1];
let prev_element = document.getElementById("previous-link");
let next_page = pages[idx_page + 1];
let next_element = document.getElementById("next-link");


if (prev_page === undefined) {
    prev_element.href = "index.html"
    prev_element.innerHTML = "Home"

} else {
    prev_element.href = prev_page.id + ".html"
    prev_element.innerHTML = prev_page.pretty_name;
}

if (filename == "index") {
    prev_element.style.visibility = "hidden"
}

if (next_page === undefined) {
    next_element.style.visibility = "hidden";
} else {
    next_element.href = next_page.id + ".html"
    next_element.innerHTML = next_page.pretty_name;
}