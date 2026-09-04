<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>GCSS Framework</title>
  <script src="js/components/daynight.js" defer></script>
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/gcss.css">

</head>

<body>

<button id="dn-toggle" class="dn-toggle" aria-label="Switch to dark mode">
    <span id="dn-icon" class="dn-icon"></span>
</button>

  <header class="container">

    <h1>GCSS Framework</h1>

    <p>
      Graham Whiz Bang CSS Framework
      <br>
      Version 1.0
    </p>

  </header>


  <main class="container">

   <section>

    <h2>Colours</h2>

    <div class="colour-grid">

        <div class="colour-card bg-main">--bg</div>
        <div class="colour-card surface">--surface</div>
        <div class="colour-card surface-alt">--surface-alt</div>

        <div class="colour-card primary">--primary</div>
        <div class="colour-card secondary">--secondary</div>
        <div class="colour-card accent">--accent</div>

        <div class="colour-card success">--success</div>
        <div class="colour-card warning">--warning</div>
        <div class="colour-card danger">--danger</div>
        <div class="colour-card info">--info</div>
    </div>

</section>


    <hr>


    <section>
find . -name "index.php"
      <h2>Typography</h2>

      <h1>Heading One</h1>

      <h2>Heading Two</h2>

      <h3>Heading Three</h3>

      <h4>Heading Four</h4>

      <p>

        This is normal paragraph text.
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.

      </p>

      <a href="#">Example Link</a>

    </section>


    <hr>


    <section>

      <h2>Spacing</h2>

      <div class="space-demo s1">Space 1</div>
      <div class="space-demo s2">Space 2</div>
      <div class="space-demo s3">Space 3</div>
      <div class="space-demo s4">Space 4</div>
      <div class="space-demo s5">Space 5</div>

    </section>


    <hr>


    <section>

      <h2>Shadows</h2>

      <div class="shadow-demo shadow1">

        Shadow Small

      </div>

      <div class="shadow-demo shadow2">

        Shadow Normal

      </div>

      <div class="shadow-demo shadow3">

        Shadow Large

      </div>

    </section>


  </main>

</body>

</html>