let chart;

function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let resultDiv = document.getElementById("result");

    // Dummy weather data (for graph)
    let temperatures = [28, 30, 32, 31, 29];
    let times = ["Morning", "Noon", "Afternoon", "Evening", "Night"];

    resultDiv.innerHTML = `
        <p><b>City:</b> ${city}</p>
        <p>🌡 Avg Temperature: 30°C</p>
        <p>🌤 Condition: Sunny</p>
    `;

    // Destroy old chart
    if (chart) {
        chart.destroy();
    }

    let ctx = document.getElementById("weatherChart").getContext("2d");

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: times,
            datasets: [{
                label: "Temperature (°C)",
                data: temperatures,
                borderColor: "blue",
                backgroundColor: "lightblue",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });
}