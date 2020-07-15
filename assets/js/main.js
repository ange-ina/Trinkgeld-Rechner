function trinkgeld() {
    event.preventDefault()
    document.getElementById("box").style.height = "200px"
    document.getElementById("rechner").style.paddingBottom = "0px"
    let percent
    if (document.getElementById("service").value == 1) {
        percent = .02
    } else if (document.getElementById("service").value == 2) {
        percent = .1
    } else if (document.getElementById("service").value == 3) {
        percent = .2
    } else if (document.getElementById("service").value == 4) {
        percent = 0
    } else {
        percent = 10
    }
    let price = document.getElementById("amount").value
    let people = document.getElementById("people").value
    let tGeld = (price * percent).toFixed(0)
    let betrag = +price + +tGeld
    let pPerson = (betrag / people).toFixed(2)
    if (percent == 10) {
        document.getElementById("trinkgeld").innerHTML = "Bitte geben Sie die Service-qualität an!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else if (people == 0) {
        document.getElementById("trinkgeld").innerHTML = "Bitte geben Sie die Anzahl der Personen an!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else if (price == 0) {
        document.getElementById("trinkgeld").innerHTML = "Bitte geben Sie die Höhe der Rechnung an!"
        document.getElementById("rechnung").innerHTML = ""
        document.getElementById("person").innerHTML = ""
    } else {
        document.getElementById("trinkgeld").innerHTML = `Trinkgeld ist: ${tGeld}€`
        document.getElementById("rechnung").innerHTML = `Gesamtbetrag ist: ${betrag}€`
        document.getElementById("person").innerHTML = `Jeder zahlt: ${pPerson}€`
    }
}