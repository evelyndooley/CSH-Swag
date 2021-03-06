$(document).ready(function () {
    var receipts_table = $('#receipts_table').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "pageLength": 10,
        "order": [[0, 'desc']],
        "ajax": {
            url: "/receipts",
            type: 'GET'
        },
        "columns": [
            {"data": "receipt_id", "visible": false},
            {"data": "datetime", "title": "Date"},
            {"data": "purchased.item.product.name", "title": "Product"},
            {"data": "cost", "render": cost, "title": "Cost"},
            {"data": "method", "render": method, "title": "Method"}
        ]
    });

    var ctx = $("#purchaseMethods");

    var dataset = {};
    var values = [];
    var purchaseMethods = new Chart(ctx, {
        type: 'pie',
        data: dataset
    });
    $.ajax({
        url: "/methods",
        method: "GET",
        success: function (data) {
            for (var key in data) {
                values.push(data[key]);
            }

            dataset = {
                datasets: [{
                    data: values,
                    backgroundColor: ["#39cb4a", "#777777", "#00b6ff"]
                }],
                labels: [
                    'Cash',
                    'Check',
                    'Venmo'
                ]
            }

            purchaseMethods = new Chart(ctx, {
                type: 'pie',
                data: dataset
            });
        }
    });
});
