function radius2diameter(radius) {
    var diameter = 2*radius;
    return diameter;
}


function radius2circumference(radius) {
    var circumference = 2*Math.PI*radius;
    return circumference;
}


function calculate_circle_parameters() {
    var radius = document.getElementById("radius").value;
    var diameter = radius2diameter(radius);
    var circumference = radius2circumference(radius);
    document.getElementById("diameter").innerHTML = diameter;
    document.getElementById("circumference").innerHTML = circumference;
}
