const topicArr = [];

function addTopic() {
    const topic = document.querySelector("input[name=topic]").value;
    const logic = document.querySelector("input[name=logic]").value;
    const obj = {
        "topic": topic,
        "logic": logic
    };
    topicArr.push(obj);

    document.querySelector("input[name=topic]").value = "";
    document.querySelector("input[name=logic]").value = "";
    document.querySelector("input[name=topic]").focus();
    alert("주제 등록")
}

function saveStor() {
    const str = JSON.stringify(topicArr);
    localStorage.setItem("topic", str);
    alert("주제 확정")
}

function showTopic() {
    const str = JSON.parse(localStorage.getItem("topic"));
    const x = document.querySelector("#topic");
    let y = 0;
    x.innerHTML = "<h2>주제 / 기능</h2>";
    for (let obj of str) {
        const h2 = document.createElement("h3");
        h2.innerText = obj.topic + " / " + obj.logic;

        x.appendChild(h2);
        y = 1;
        console.log("111111");
    }

    if (y === 1) {
        setTimeout(() => {
            alert("조회 성공!");
        }, 3000);
    }

}
