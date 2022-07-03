document.getElementById("forbase").oninput = function() {
	var dataBase = document.getElementById("forbase").value;
	var dataBonus = document.getElementById("forbonus").value;
	console.log(dataBonus)
	var sum = Number(dataBase) + Number(dataBonus);
	console.log(sum)
	document.getElementById("fortotal").value = sum;
};
document.getElementById("forbonus").oninput = function() {
	var dataBase = document.getElementById("forbase").value;
	var dataBonus = document.getElementById("forbonus").value;
	console.log(dataBonus)
	var sum = Number(dataBase) + Number(dataBonus);
	console.log(sum)
	document.getElementById("fortotal").value = sum;
};

function addEquip() {
	const para = document.createElement("div");
	const node1 = document.createElement("input", type="text", id="eq_type", name="eq_type", size="30");
	node1.size = 30

	para.appendChild(node1);
	const element = document.getElementById("eqHead");
	element.appendChild(para);
}