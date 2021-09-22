<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Top fasdfaf road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show1 = !show1"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                <p class="news-info" style="margin:0; padding:0;"> Nemocón es un pueblo en Cundinamarca famoso por su gran actividad minera.
                  A pocos kilómetros de Bogotá, se puede llegar a este lugar para explorar y ver espejos de agua.</p>
                  <router-link to="/nemocon">Leer noticia completa >></router-link>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
<!--        <div class="news-data">-->
<!--          <div class="news-image">-->
<!--            <i class="fas fa-ambulance news-logo" style="font-size:150px"></i>-->
<!--          </div>-->
<!--          <div class="news-text">-->
<!--            <h3 class="news-title">Parque Nacional el Tuparro</h3>-->
<!--            <hr>-->
<!--            <p class="news-info" style="margin:0; padding:0;">Es una reserva natural de gran extensión en el departamento-->
<!--              de Vichada que ofrece al visitante hermosos ríos, gran variedad de vegetación, la posibilidad de ver jaguares,-->
<!--              además de cientos de especies de aves.</p>-->
<!--            <span class="news-url"><A href="https://www.colombia.co/visita-colombia/experiencias-unicas/12-lugares-que-no-puedes-dejar-de-ver-en-colombia/">Leer noticia completa >></A></span>-->
<!--          </div>-->
<!--        </div>-->
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show2 = !show2"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                <p class="news-info" style="margin:0; padding:0;"> Nemocón es un pueblo en Cundinamarca famoso por su gran actividad minera.
                  A pocos kilómetros de Bogotá, se puede llegar a este lugar para explorar y ver espejos de agua.</p>
                <span class="news-url"><a href="#">Leer noticia completa >></a></span>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="news-text">
          <h3 class="news-title">Santuario de las Lajas, Nariño</h3>
          <hr>
          <p class="news-info" style="margin:0; padding:0;">Es una iglesia católica ubicada en Ipiales,
            sobre el cañón del río Guáitara, muy cercana a la frontera con Ecuador. La construcción es de estilo neogótico y está
            hecha en piedra gris y blanca. Ha sido catalogada como una de las iglesias más bonitas del mundo por el diario británico The Telegraph.</p>
          <span class="news-url"><a href="#">Leer noticia completa >></a></span>
        </div>
      </v-col>
      <v-col>
        <div class="news-text">
          <h3 class="news-title">Castillo de San Felipe</h3>
          <hr>
          <p class="news-info" style="margin:0; padding:0;"> construido sobre una base triangular forma un espectacular bunker geométrico.
            es el fuerte más grande jamás construido por los españoles en las colonias. Es uno de los edificios más imponentes que ver en Colombia.</p>
          <span class="news-url"><a href="#">Leer noticia completa >></a></span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
  }),
}
</script>