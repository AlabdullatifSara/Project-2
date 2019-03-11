
$(function(){


                                                            // NEWs 


  /// WHEN FEEDER IS CLICKED ALL ARTICLES WILL BE REMOVED
  $("a h1").on( "click", function(){
    $(".article").remove()
  });

  /// when the x is clicked the popup will close
  $(".closePopUp").on( "click", function(){
    $("#popUp").hide()
    $('#popUp.loader').css("background-size", "default")
  });


  $("#news").on( "click", function() {
  //     //  event.preventdefault()

  // When the application first loads display the loading container
      $("#popUp").attr("hidden",false);
      let NEWSapiData = []
      $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=4474a36a48bc41ebb37454d592870026",
      type: "get",
      success: function(res){
          NEWSapiData= res
          // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
          $(".article").remove();
          let num = 0
          res.articles.forEach(function(element){       
          // ADDING EACH ARTICLE TO THE PAGE
              num= num + 1
              const article = document.createElement('article');
              article.setAttribute('class', 'article')
              article.setAttribute('id', num)
              const main= document.getElementById("main")
              main.appendChild(article)
              const featuredImage = document.createElement("section") 
              featuredImage.setAttribute('class', 'featuredImage')
              article.appendChild(featuredImage)
              const img= document.createElement("img")
              img.setAttribute('src', `${element.urlToImage}`)
              featuredImage.appendChild(img)
              const articleContent= document.createElement('section')
              articleContent.setAttribute('class', 'articleContent')
              article.appendChild(articleContent)
              const a = document.createElement('a');
              a.setAttribute('href', '#')
              articleContent.appendChild(a)
              const h3= document.createElement('h3')
              h3.setAttribute('class', 'title' )
              h3.textContent = `${element.title}`; 
              a.appendChild(h3)
              const h6= document.createElement('h6');
              h6.textContent = `${element.author}`;
              articleContent.appendChild(h6)
              const impressions= document.createElement('section')
              impressions.setAttribute('class', 'impressions')
              $('.impressions').text("NEWS")
              article.appendChild(impressions)
              const clearfix= document.createElement('div')
              clearfix.setAttribute('class', 'clearfix')
              article.appendChild(clearfix)

          });

          // When the application finishes loading, hide the loading container                 
          $("#popUp").attr("hidden",true);

          /// when an article is clicked the popUp will show 
          $(".article").on("click", function(){
              let index = $(this).attr('id') - 1
              //changing the title in the popUp to the article's title
              $("div.container h1").text(`${NEWSapiData.articles[index].title}`)
              //changing the read more link to the article's link
              $("div.container a").attr('href', `${NEWSapiData.articles[index].url}`)
              //changing the content in the popUp to the article's content
              $("div.container p").text(`${NEWSapiData.articles[index].description}`)
              // show the popUp
              $("div.loader  div").css("display", "block")
              $("#popUp").show()
              $('#popUp.loader').css("background-size", "0 0")
          })



          },
          error: function(xhr, status, err){
          alert("not working")
          }
          
      });

  });


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                              // The New York Times 

  $("#TNYT").on( "click", function() {
    //event.preventdefault()

    // When the application first loads display the loading container
    $("#popUp").attr("hidden",false);

    let TNYTapiData = []
    $.ajax({
    url: "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EcK5t2MyGl9dJrLYpYAvYZnBie1KhN9D",
    type: "get",
    success: function(res){
      TNYTapiData= res
      // REPLACING THE PREVIOUS ARTICLES WITH THE NEW ONES
      $(".article").remove();
      let num = 0
      res.results.forEach(function(element){             
          // ADDING EACH ARTICLE TO THE PAGE
          num= num + 1
          const article = document.createElement('article');
          article.setAttribute('class', 'article')
          article.setAttribute('id', num)
          const main= document.getElementById("main")
          main.appendChild(article)
          const featuredImage = document.createElement("section") 
          featuredImage.setAttribute('class', 'featuredImage')
          article.appendChild(featuredImage)
          const img= document.createElement("img")
          img.setAttribute('src', `${element.thumbnail_standard}`)
          featuredImage.appendChild(img)
          const articleContent= document.createElement('section')
          articleContent.setAttribute('class', 'articleContent')
          article.appendChild(articleContent)
          const a = document.createElement('a');
          a.setAttribute('href', '#')
          articleContent.appendChild(a)
          const h3= document.createElement('h3')
          h3.setAttribute('class', 'title' )
          h3.textContent = `${element.title}`;
          a.appendChild(h3)
          const h6= document.createElement('h6');
          h6.textContent = `${element.section}`;
          articleContent.appendChild(h6)
          const impressions= document.createElement('section')
          impressions.setAttribute('class', 'impressions')
          $('.impressions').text("NY Times")
          article.appendChild(impressions)
          const clearfix= document.createElement('div')
          clearfix.setAttribute('class', 'clearfix')
          article.appendChild(clearfix)
    
      });

      // When the application finishes loading, hide the loading container                 
      $("#popUp").attr("hidden",true);


      /// when an article is clicked the popUp will show 
      $(".article").on("click", function(){
          let index = $(this).attr('id') - 1
          //changing the title in the popUp to the article's title
          $("div.container h1").text(`${TNYTapiData.results[index].title}`)
          //changing the read more link to the article's link
          $("div.container a").attr('href', `${TNYTapiData.results[index].url}`)
          //changing the content in the popUp to the article's content
          $("div.container p").text(`${TNYTapiData.results[index].abstract}`)
          // show the popUp
          $("div.loader  div").css("display", "block")
          $("#popUp").show()  
          $('#popUp.loader').css("background-size", "0 0")
      })

    },
    error: function(xhr, status, err){
    alert("not working")
    }
    });

  });

});

                                                         // Done