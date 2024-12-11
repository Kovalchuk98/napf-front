let diagram = document.getElementById('diagram');

// Left side #3 
let vector_213 = document.getElementById('Vector_213');
let vector_214 = document.getElementById('Vector_214');
let vector_215 = document.getElementById('Vector_215');

// Left side #4 
let vector_210 = document.getElementById('Vector_210');
let vector_211 = document.getElementById('Vector_211');
let vector_212 = document.getElementById('Vector_212');

// Right side #3 
let vector_39 = document.getElementById('Vector_39');
let vector_40 = document.getElementById('Vector_40');
let vector_41 = document.getElementById('Vector_41');

// Right side #4 
let vector_42 = document.getElementById('Vector_42');
let vector_43 = document.getElementById('Vector_43');
let vector_44 = document.getElementById('Vector_44');

// Right side #5 
let vector_45 = document.getElementById('Vector_45');
let vector_46 = document.getElementById('Vector_46');
let vector_47 = document.getElementById('Vector_47');

// Right side #6 
let vector_48 = document.getElementById('Vector_48');
let vector_49 = document.getElementById('Vector_49');
let vector_50 = document.getElementById('Vector_50');

//Right Orange
let orange_1 = document.getElementById('Vector_29');
let orange_2 = document.getElementById('Vector_30');


// #3

//default
// x1="261.678" y1="530.705" x2="198.964" y2="423.956"
let linear_154 = document.getElementById('paint154_linear_2021_32426');
//default
// x1="199.655" y1="401.113" x2="184.572" y2="524.085"
let linear_155 = document.getElementById('paint155_linear_2021_32426');
//default
// x1="195.631" y1="306.202" x2="216.415" y2="478.578"
let linear_156 = document.getElementById('paint156_linear_2021_32426');

// #4

//default
// x1="261.678" y1="530.705" x2="198.964" y2="423.956"
let linear_151 = document.getElementById('paint151_linear_2021_32426');
//default
// x1="199.655" y1="401.113" x2="184.572" y2="524.085"
let linear_152 = document.getElementById('paint152_linear_2021_32426');
//default
// x1="195.631" y1="306.202" x2="216.415" y2="478.578"
let linear_153 = document.getElementById('paint153_linear_2021_32426');

// RIGHT SIDE


// #3

// x1="440.706" y1="360.156" x2="507.496" y2="246.47"
let linear_19 = document.getElementById('paint19_linear_2021_32426');
// x1 = "506.76" y1 = "222.143" x2 = "522.819" y2 = "353.108"
let linear_20 = document.getElementById('paint20_linear_2021_32426');
// x1="503.198" y1="186.109" x2="481.064" y2="369.686"
let linear_21 = document.getElementById('paint21_linear_2021_32426');

// #4

let linear_22 = document.getElementById('paint22_linear_2021_32426');

let linear_23 = document.getElementById('paint23_linear_2021_32426');

let linear_24 = document.getElementById('paint24_linear_2021_32426');

// #5

let linear_25 = document.getElementById('paint25_linear_2021_32426');

let linear_26 = document.getElementById('paint26_linear_2021_32426');

let linear_27 = document.getElementById('paint27_linear_2021_32426');

// #6

let linear_28 = document.getElementById('paint28_linear_2021_32426');

let linear_29 = document.getElementById('paint29_linear_2021_32426');

let linear_30 = document.getElementById('paint30_linear_2021_32426');

// Orange
let linear_9 = document.getElementById('paint9_linear_2021_32426');

let linear_10 = document.getElementById('paint10_linear_2021_32426');




// Main slider
$('.main_slider_items').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: false,
    touchDrag: false,
    mouseDrag: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
    },
    onTranslate: function (event) {

        if (event.page.index == 1) {

            // Diagram
            diagram.setAttribute('transform', `matrix(1, 0, 0, 1, 0, -49.746952)`);

            // Left #3
            vector_213.setAttribute('d', 'M232.482 321.599L232.356 509.777L205.89 525.157L206.016 336.979L232.482 321.599Z');
            vector_214.setAttribute('d', 'M206.016 336.979L205.89 525.157L179.249 509.777L179.374 321.599L206.016 336.979Z');
            vector_215.setAttribute('d', 'M232.482 321.599L206.016 336.979L179.375 321.599L205.844 306.219L232.482 321.599Z');

            linear_154.setAttribute('x1', '261.678');
            linear_154.setAttribute('y1', '530.706');
            linear_154.setAttribute('x2', '198.964');
            linear_154.setAttribute('y2', '423.957');

            linear_155.setAttribute('x1', '199.655');
            linear_155.setAttribute('y1', '401.113');
            linear_155.setAttribute('x2', '184.572');
            linear_155.setAttribute('y2', '524.085');

            linear_156.setAttribute('x1', '195.632')
            linear_156.setAttribute('y1', '236.202')
            linear_156.setAttribute('x2', '216.416')
            linear_156.setAttribute('y2', '408.578')


            // Right #3
            vector_39.setAttribute('d', 'M471.802 242.006L471.935 337.869L500.121 354.248L499.987 258.389L471.802 242.006Z');
            vector_40.setAttribute('d', 'M499.987 258.389L500.121 354.248L528.494 337.869L528.356 242.006L499.987 258.389Z');
            vector_41.setAttribute('d', 'M471.801 242.006L499.987 258.389L528.356 242.006L500.17 225.627L471.801 242.006Z');

            linear_19.setAttribute('x1', '440.706')
            linear_19.setAttribute('y1', '360.155')
            linear_19.setAttribute('x2', '507.496')
            linear_19.setAttribute('y2', '246.469')

            linear_20.setAttribute('x1', '506.76')
            linear_20.setAttribute('y1', '222.143')
            linear_20.setAttribute('x2', '522.819')
            linear_20.setAttribute('y2', '353.108')

            linear_21.setAttribute('x1', '503.198')
            linear_21.setAttribute('y1', '216.108')
            linear_21.setAttribute('x2', '481.064')
            linear_21.setAttribute('y2', '399.685')

            // Right #5
            vector_45.setAttribute('d', 'M556.862 260.119L557 387.983L585.186 404.362L585.048 276.498L556.862 260.119Z');
            vector_46.setAttribute('d', 'M585.048 276.498L585.186 404.362L613.555 387.983L613.421 260.119L585.048 276.498Z');
            vector_47.setAttribute('d', 'M556.862 260.119L585.048 276.498L613.421 260.119L585.235 243.74L556.862 260.119Z');

            linear_25.setAttribute('x1', '553.793')
            linear_25.setAttribute('y1', '401.57')
            linear_25.setAttribute('x2', '579.225')
            linear_25.setAttribute('y2', '358.283')

            linear_26.setAttribute('x1', '596.024')
            linear_26.setAttribute('y1', '345.53')
            linear_26.setAttribute('x2', '603.06')
            linear_26.setAttribute('y2', '402.89')

            linear_27.setAttribute('x1', '602.27')
            linear_27.setAttribute('y1', '118.056')
            linear_27.setAttribute('x2', '580.136')
            linear_27.setAttribute('y2', '301.629')

            orange_1.setAttribute('d', 'M711.608 328.621V302.033L644.486 264.18L617.295 215.489L572.5 180.5L537.5 124L513 107L484 100.5L481.827 104.293L486.445 199.479L706.99 329.693L711.608 328.621Z');
            orange_2.setAttribute('d', 'M706.99 329.693V303.105L639.868 265.252L612.677 216.56L569 183.5L535 127.5L509 110L481.827 104V200.555L706.99 329.693Z');

            linear_9.setAttribute('x1', '693.694')
            linear_9.setAttribute('y1', '230.231')
            linear_9.setAttribute('x2', '465.82')
            linear_9.setAttribute('y2', '200.676')

            linear_10.setAttribute('x1', '585.536')
            linear_10.setAttribute('y1', '175.11')
            linear_10.setAttribute('x2', '567.423')
            linear_10.setAttribute('y2', '265.66')

        } else if (event.page.index == 2) {
            diagram.setAttribute('transform', `matrix(1, 0, 0, 1, 0, -28.426828)`);


            // Left #3
            vector_213.setAttribute('d', 'M232.482 391.598L232.356 509.776L205.89 525.156L206.016 406.978L232.482 391.598Z');
            vector_214.setAttribute('d', 'M206.016 406.978L205.89 525.156L179.249 509.776L179.374 391.598L206.016 406.978Z');
            vector_215.setAttribute('d', 'M232.482 391.598L206.016 406.978L179.374 391.598L205.844 376.218L232.482 391.598Z');

            linear_154.setAttribute('x1', '261.678');
            linear_154.setAttribute('y1', '530.705');
            linear_154.setAttribute('x2', '198.964');
            linear_154.setAttribute('y2', '423.956');

            linear_155.setAttribute('x1', '199.655');
            linear_155.setAttribute('y1', '401.113');
            linear_155.setAttribute('x2', '184.572');
            linear_155.setAttribute('y2', '524.085');

            linear_156.setAttribute('x1', '195.631')
            linear_156.setAttribute('y1', '306.201')
            linear_156.setAttribute('x2', '216.415')
            linear_156.setAttribute('y2', '478.578')

            // Left #4
            vector_210.setAttribute('d', 'M272.417 345.801L272.291 486.247L245.825 501.627L245.951 361.181L272.417 345.801Z');
            vector_211.setAttribute('d', 'M245.951 361.181L245.826 501.627L219.184 486.247L219.314 345.801L245.951 361.181Z');
            vector_212.setAttribute('d', 'M272.418 345.801L245.952 361.181L219.314 345.801L245.78 330.421L272.418 345.801Z');

            linear_151.setAttribute('x1', '291.649');
            linear_151.setAttribute('y1', '504.083');
            linear_151.setAttribute('x2', '243.64');
            linear_151.setAttribute('y2', '422.366');

            linear_152.setAttribute('x1', '238.095');
            linear_152.setAttribute('y1', '403.638');
            linear_152.setAttribute('x2', '226.224');
            linear_152.setAttribute('y2', '500.441');

            linear_153.setAttribute('x1', '235.57')
            linear_153.setAttribute('y1', '260.404')
            linear_153.setAttribute('x2', '256.355')
            linear_153.setAttribute('y2', '432.78')

            // Right #3
            vector_39.setAttribute('d', 'M471.802 252.006L471.935 337.869L500.121 354.248L499.987 268.389L471.802 252.006Z');
            vector_40.setAttribute('d', 'M499.987 268.389L500.121 354.248L528.494 337.869L528.356 252.006L499.987 268.389Z');
            vector_41.setAttribute('d', 'M471.801 252.006L499.987 268.389L528.356 252.006L500.17 235.627L471.801 252.006Z');

            linear_19.setAttribute('x1', '440.706')
            linear_19.setAttribute('y1', '360.155')
            linear_19.setAttribute('x2', '507.496')
            linear_19.setAttribute('y2', '246.469')

            linear_20.setAttribute('x1', '506.76')
            linear_20.setAttribute('y1', '222.143')
            linear_20.setAttribute('x2', '522.819')
            linear_20.setAttribute('y2', '353.108')

            linear_21.setAttribute('x1', '503.198')
            linear_21.setAttribute('y1', '226.108')
            linear_21.setAttribute('x2', '481.064')
            linear_21.setAttribute('y2', '409.685')

            // Right #4
            vector_42.setAttribute('d', 'M514.33 243.129L514.467 362.924L542.653 379.303L542.516 259.508L514.33 243.129Z');
            vector_43.setAttribute('d', 'M542.516 259.508L542.653 379.303L571.022 362.924L570.889 243.129L542.516 259.508Z');
            vector_44.setAttribute('d', 'M514.33 243.129L542.516 259.508L570.889 243.129L542.703 226.746L514.33 243.129Z');

            linear_22.setAttribute('x1', '499.785')
            linear_22.setAttribute('y1', '380.073')
            linear_22.setAttribute('x2', '542.153')
            linear_22.setAttribute('y2', '307.963')

            linear_23.setAttribute('x1', '551.771')
            linear_23.setAttribute('y1', '290.474')
            linear_23.setAttribute('x2', '562.503')
            linear_23.setAttribute('y2', '377.968')

            linear_24.setAttribute('x1', '553.575')
            linear_24.setAttribute('y1', '152.183')
            linear_24.setAttribute('x2', '531.442')
            linear_24.setAttribute('y2', '335.76')

            // Right #5
            vector_45.setAttribute('d', 'M556.862 340.119L557 387.983L585.186 404.362L585.048 356.498L556.862 340.119Z');
            vector_46.setAttribute('d', 'M585.048 356.498L585.186 404.362L613.555 387.983L613.421 340.119L585.048 356.498Z');
            vector_47.setAttribute('d', 'M556.862 340.119L585.048 356.498L613.421 340.119L585.235 323.74L556.862 340.119Z');

            linear_25.setAttribute('x1', '553.793')
            linear_25.setAttribute('y1', '401.57')
            linear_25.setAttribute('x2', '579.225')
            linear_25.setAttribute('y2', '358.283')

            linear_26.setAttribute('x1', '596.024')
            linear_26.setAttribute('y1', '345.53')
            linear_26.setAttribute('x2', '603.06')
            linear_26.setAttribute('y2', '402.89')

            linear_27.setAttribute('x1', '602.27')
            linear_27.setAttribute('y1', '198.056')
            linear_27.setAttribute('x2', '580.136')
            linear_27.setAttribute('y2', '381.629')

            // Right #6
            vector_48.setAttribute('d', 'M610.008 295.223L610.142 421.545L638.328 437.928L638.194 311.602L610.008 295.223Z');
            vector_49.setAttribute('d', 'M638.194 311.602L638.328 437.928L666.7 421.545L666.563 295.223L638.194 311.602Z');
            vector_50.setAttribute('d', 'M610.008 295.222L638.194 311.602L666.563 295.222L638.377 278.843L610.008 295.222Z');

            linear_28.setAttribute('x1', '589.525')
            linear_28.setAttribute('y1', '440.541')
            linear_28.setAttribute('x2', '640.654')
            linear_28.setAttribute('y2', '353.512')

            linear_29.setAttribute('x1', '646.557')
            linear_29.setAttribute('y1', '333.571')
            linear_29.setAttribute('x2', '659.199')
            linear_29.setAttribute('y2', '436.662')

            linear_30.setAttribute('x1', '642.549')
            linear_30.setAttribute('y1', '259.856')
            linear_30.setAttribute('x2', '620.415')
            linear_30.setAttribute('y2', '443.432')

            // Orange

            orange_1.setAttribute('d', 'M711.608 328.621V302.033L644.486 264.18L617.295 215.488L568.863 215.238L545.425 141.803L510.691 126.141L486.445 103.217L481.827 104.293L486.445 199.479L706.99 329.693L711.608 328.621Z');
            orange_2.setAttribute('d', 'M706.99 329.693V303.105L639.868 265.252L612.677 216.56L564.245 216.314L540.811 142.879L506.073 127.216L481.827 104.293V200.555L706.99 329.693Z');

            linear_10.setAttribute('x1', '585.536')
            linear_10.setAttribute('y1', '175.11')
            linear_10.setAttribute('x2', '567.423')
            linear_10.setAttribute('y2', '265.66')

            linear_9.setAttribute('x1', '583.37')
            linear_9.setAttribute('y1', '317.364')
            linear_9.setAttribute('x2', '666.761')
            linear_9.setAttribute('y2', '159.098')


        } else {

            diagram.removeAttribute('transform') 


                      // Left #3
                      vector_213.setAttribute('d', 'M232.482 391.599L232.356 509.777L205.89 525.157L206.016 406.979L232.482 391.599Z');
                      vector_214.setAttribute('d', 'M206.016 406.979L205.89 525.157L179.249 509.777L179.374 391.599L206.016 406.979Z');
                      vector_215.setAttribute('d', 'M232.482 391.599L206.016 406.979L179.374 391.599L205.844 376.219L232.482 391.599Z');
          
                      linear_154.setAttribute('x1', '261.678');
                      linear_154.setAttribute('y1', '530.705');
                      linear_154.setAttribute('x2', '198.964');
                      linear_154.setAttribute('y2', '423.956');
          
                      linear_155.setAttribute('x1', '199.655');
                      linear_155.setAttribute('y1', '401.113');
                      linear_155.setAttribute('x2', '184.572');
                      linear_155.setAttribute('y2', '524.085');
          
                      linear_156.setAttribute('x1', '195.631')
                      linear_156.setAttribute('y1', '306.201')
                      linear_156.setAttribute('x2', '216.415')
                      linear_156.setAttribute('y2', '478.578')
          
                      // Left #4
                      vector_210.setAttribute('d', 'M272.417 395.802L272.292 486.248L245.825 501.628L245.951 411.182L272.417 395.802Z');
                      vector_211.setAttribute('d', 'M245.951 411.182L245.826 501.628L219.184 486.248L219.314 395.802L245.951 411.182Z');
                      vector_212.setAttribute('d', 'M272.418 395.801L245.951 411.181L219.314 395.801L245.78 380.421L272.418 395.801Z');
          
                      linear_151.setAttribute('x1', '291.649');
                      linear_151.setAttribute('y1', '504.084');
                      linear_151.setAttribute('x2', '243.64');
                      linear_151.setAttribute('y2', '422.367');
          
                      linear_152.setAttribute('x1', '238.095');
                      linear_152.setAttribute('y1', '403.639');
                      linear_152.setAttribute('x2', '226.224');
                      linear_152.setAttribute('y2', '500.442');
          
                      linear_153.setAttribute('x1', '235.57')
                      linear_153.setAttribute('y1', '310.405')
                      linear_153.setAttribute('x2', '256.355')
                      linear_153.setAttribute('y2', '482.781')
          
                      // Right #3
                      vector_39.setAttribute('d', 'M471.802 212.006L471.935 337.869L500.121 354.248L499.987 228.389L471.802 212.006Z');
                      vector_40.setAttribute('d', 'M499.987 228.389L500.121 354.248L528.494 337.869L528.356 212.006L499.987 228.389Z');
                      vector_41.setAttribute('d', 'M471.801 212.006L499.987 228.389L528.356 212.006L500.17 195.627L471.801 212.006Z');
          
                      linear_19.setAttribute('x1', '440.706')
                      linear_19.setAttribute('y1', '360.155')
                      linear_19.setAttribute('x2', '507.496')
                      linear_19.setAttribute('y2', '246.469')
          
                      linear_20.setAttribute('x1', '506.76')
                      linear_20.setAttribute('y1', '222.143')
                      linear_20.setAttribute('x2', '522.819')
                      linear_20.setAttribute('y2', '353.108')
          
                      linear_21.setAttribute('x1', '503.198')
                      linear_21.setAttribute('y1', '186.108')
                      linear_21.setAttribute('x2', '481.064')
                      linear_21.setAttribute('y2', '369.685')
          
                      // Right #4
                      vector_42.setAttribute('d', 'M514.33 283.129L514.467 362.924L542.653 379.303L542.516 299.508L514.33 283.129Z');
                      vector_43.setAttribute('d', 'M542.516 299.508L542.653 379.303L571.022 362.924L570.889 283.129L542.516 299.508Z');
                      vector_44.setAttribute('d', 'M514.33 283.129L542.516 299.508L570.889 283.129L542.703 266.746L514.33 283.129Z');
          
                      linear_22.setAttribute('x1', '499.785')
                      linear_22.setAttribute('y1', '380.073')
                      linear_22.setAttribute('x2', '542.153')
                      linear_22.setAttribute('y2', '307.963')
          
                      linear_23.setAttribute('x1', '551.771')
                      linear_23.setAttribute('y1', '290.474')
                      linear_23.setAttribute('x2', '562.503')
                      linear_23.setAttribute('y2', '377.968')
          
                      linear_24.setAttribute('x1', '553.576')
                      linear_24.setAttribute('y1', '192.183')
                      linear_24.setAttribute('x2', '531.442')
                      linear_24.setAttribute('y2', '375.76')
          
                      // Right #5
                      vector_45.setAttribute('d', 'M556.862 340.119L557 387.983L585.186 404.362L585.048 356.498L556.862 340.119Z');
                      vector_46.setAttribute('d', 'M585.048 356.498L585.186 404.362L613.555 387.983L613.421 340.119L585.048 356.498Z');
                      vector_47.setAttribute('d', 'M556.862 340.119L585.048 356.498L613.421 340.119L585.235 323.74L556.862 340.119Z');
          
                      linear_25.setAttribute('x1', '553.793')
                      linear_25.setAttribute('y1', '401.57')
                      linear_25.setAttribute('x2', '579.225')
                      linear_25.setAttribute('y2', '358.283')
          
                      linear_26.setAttribute('x1', '596.024')
                      linear_26.setAttribute('y1', '345.53')
                      linear_26.setAttribute('x2', '603.06')
                      linear_26.setAttribute('y2', '402.89')
          
                      linear_27.setAttribute('x1', '602.27')
                      linear_27.setAttribute('y1', '198.056')
                      linear_27.setAttribute('x2', '580.136')
                      linear_27.setAttribute('y2', '381.629')
          
                      // Right #6
                      vector_48.setAttribute('d', 'M610.008 325.223L610.142 421.546L638.328 437.929L638.194 341.602L610.008 325.223Z');
                      vector_49.setAttribute('d', 'M638.194 341.602L638.328 437.929L666.7 421.546L666.563 325.223L638.194 341.602Z');
                      vector_50.setAttribute('d', 'M610.008 325.223L638.194 341.602L666.563 325.223L638.377 308.844L610.008 325.223Z');
          
                      linear_28.setAttribute('x1', '589.525')
                      linear_28.setAttribute('y1', '440.541')
                      linear_28.setAttribute('x2', '640.654')
                      linear_28.setAttribute('y2', '353.512')
          
                      linear_29.setAttribute('x1', '646.557')
                      linear_29.setAttribute('y1', '333.571')
                      linear_29.setAttribute('x2', '659.199')
                      linear_29.setAttribute('y2', '436.662')
          
                      linear_30.setAttribute('x1', '642.549')
                      linear_30.setAttribute('y1', '289.856')
                      linear_30.setAttribute('x2', '620.415')
                      linear_30.setAttribute('y2', '473.433')
          
                      // Orange
          
                      orange_1.setAttribute('d', 'M711.608 328.622V302.034L644.486 264.18L617.295 215.489L568.863 195.239L545.425 141.803L510.691 126.141L486.445 103.218L481.827 104.293L486.445 199.479L706.99 329.693L711.608 328.622Z');
                      orange_2.setAttribute('d', 'M706.99 329.694V303.105L639.868 265.252L612.677 216.561L564.245 196.314L540.811 142.879L506.073 127.217L481.827 104.293V200.555L706.99 329.694Z');
          
                      linear_9.setAttribute('x1', '693.694')
                      linear_9.setAttribute('y1', '230.231')
                      linear_9.setAttribute('x2', '465.82')
                      linear_9.setAttribute('y2', '200.676')
          
                      linear_10.setAttribute('x1', '585.536')
                      linear_10.setAttribute('y1', '175.11')
                      linear_10.setAttribute('x2', '567.423')
                      linear_10.setAttribute('y2', '265.66')

        }
    }
})