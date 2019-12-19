<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Build a table</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <h1>Mountains</h1>
    <div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  // Your code here
  function buildTable(data) {
      var header = Object.keys(data[0]);
      var headerRow = document.createElement('tr');
      var table = document.createElement('table');
      header.forEach(function(header){
          var headerEl = document.createElement('th');
          headerEl.textContent = header;
          headerRow.appendChild(headerEl);
      })
      table.appendChild(headerRow);
      data.forEach(function(mountain){
          var row = document.createElement('tr');
          for (prop in mountain){
              var el = document.createElement('td');
              if (typeof mountain[prop] === 'number') { el.style.textAlign = "right"; }
              el.textContent = mountain[prop];
              row.appendChild(el);
          }
          table.appendChild(row)
      })
      return table
      
  }
  document.body.appendChild(buildTable(MOUNTAINS));
</script>
<style>
    table { border-collapse: collapse; }
    td, th { border: 1px solid black; padding: 3px 8px; }
    th { text-align: left;}
</style>
</body>
</html>