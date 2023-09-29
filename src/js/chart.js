// script.js
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "line", // Çizgi grafiğini kıvrımlı olarak ayarlayın
        data: {
            labels: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
            datasets: [{
                label: "Bu Hafta Ziyaretçiler",
                data: [120, 220, 180, 250, 200, 280, 300],
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: true, // Kıvrımlı çizgiyi doldurun
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
