<template>
  <div class="about">
  
    <h1>This is an about page</h1>
    
  </div>
</template>
<h1 class="title">CartaViajes</h1>

	<div class="container">
		<div class="card">
			<img src="Torre del Reloj">
			<h4>Planes Turisticos</h4>
			<p>Conoce la ciudad mas linda de colombia con un plan con todo incluido</p>
			<a href="·">Leer mas</a>
		</div>

		<div class="card">
			<img src="Hotel">
			<h4>Llega a Cartagena con Nosotros</h4>
			<p>Encuentra el medio para llegar a Cartagena a travez de nosotros</p>
			<a href="·">Leer mas</a>
		</div>

		<div class="card">
			<img scr="Avion">
			<h4>¡No te Pierdas! Asesorate con nosotros</h4>
			<p>Si necesitas asesoria sobre que lugares conocer y por donde empezar a conocer esta hermosa ciudad pregunta no te de pena</p>
			<a href="·">Leer mas</a>
		</div>
	</div>
<style>
html, body{
	margin: 0;
	margin: 0;
}

body{
	width: 100%;
	height: 100%;
	font-family: sans-serif;
	letter-spacing: 0.03em;
	line-height: 1.6;
}

.title{
	text-align: center;
	font-size: 40px;
	color: ·6a6a6a;
	margin-top: 100px;
	font-weight: 100;
}

.container{
	width: 100%;
	max-width: 1200px;
	height: flex;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
}

.container .card{
	width: 330px;
	height: 430px;
	border-radius: 8px;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	margin: 20px;
	text-align: center;
	transition: all 0.25s;
}

.container .card:hover{
	transform: translateY(-15px);
	box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
.container .card img{
	width: 330px;
	heigth: 220px;
}

.container .card h4{
	font-weight: 600;
}

.container .card p{
	padding: 0 1rem;
	font-size: 16px;
	font-weight: 300;
}
</style>
