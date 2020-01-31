<template lang="pug">
  #app
    h1 Quotes Generator
    block content
     .container

        div(v-if="mode==='addNewQuote'")
          textarea(name="body" v-model="newQuoteBody" placeholder="Quote")
          input(type="text" name="author" v-model="newQuoteAuthor" placeholder="Author")
          input(type="text" name="link" v-model="newQuoteLink" placeholder="Link")

          div
          span.buttonBar
            ButtonSpan(@click.native="submitNewQuote()" type="submitButton" label="Submit")

        div(v-if="mode==='getNewQuote'")
          div.quote
            a(v-if="quote.link" :href="quote.link") {{ quote.body }}

            span.quote-text(v-else) "{{ quote.body}}" 
          span.quote-author(v-if="quote.author" ) -{{ quote.author }} 
          span.quote-author(v-else) -Artist Unknown
    
          span.buttonBar
            ButtonSpan(@click.native="deleteQuote" type="deleteButton" label="╳ Not Feeling It")
            ButtonSpan(@click.native="getNewQuote" type="getNewButton" label="♺ Another Quote")
            ButtonSpan(@click.native="addNewQuote" type="addNewButton" label="+ New Quote")

</template>

<script>
  import ButtonSpan from './ButtonSpan.vue'
  import { getRandomQuote, quotes } from '@/quotes'

  export default {
    name: 'card',
    data() {
      return {
        mode: 'getNewQuote',
        quote: getRandomQuote(),
        quotes: quotes,
        newQuoteBody:'',
        newQuoteAuthor:'',
        newQuoteLink:'',
        newQuoteCount: 0,
      }
    },
    components: {
      ButtonSpan,
    },
    methods: { 
      addNewQuote() {
        this.mode = 'addNewQuote';
      },
      getNewQuote() {
        this.mode = 'getNewQuote';
        this.quote = getRandomQuote()
      },

      deleteQuote(quote_id) {
      
      localStorage.removeItem('newQuote_${quote_id}');
      console.log('removed')
      console.log(quotes)
      },

      submitNewQuote(e) {
        var newQuote = new Object();
        newQuote.body = this.newQuoteBody;
        newQuote.author = this.newQuoteAuthor;
        newQuote.link = this.newQuoteLink;
        this.quotes.push(newQuote)
        this.mode = 'getNewQuote';
        this.quote = newQuote;
        this.newQuoteCount = this.newQuoteCount + 1;

        localStorage.setItem('newQuote_${this.newQuoteCount}', JSON.stringify(newQuote));

        this.newQuoteBody = '';
        this.newQuoteAuthor = '';
        this.newQuoteLink = '';
      }
    },
}
</script>

<style>

body {
  background-color: #F49782;
}

.buttonBar {
    margin-top: 100px;
}

.container {
  background-color: white;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #6d6d6d; 
  color: #6d6d6d;
  margin: 50px 200px;
  padding: 30px;
  width: 75%;
}

.quote {
  display: flex;
  justify-content: center;
}

.quote-author {
  display: flex;
  float: right;
  font-style: italic;
  padding-right: 50px;
}

.quote-text {
  font-size: 36px;
  padding-bottom: 30px;
}

textarea {
  border: 1px solid #6d6d6d;
  width: 600px;
	height: 120px;
  margin-bottom: 10px;
  display: inline-block;
}

input[type="text"] {
  border: 1px solid #6d6d6d;
  width: 600px;
  height: 45px;
  margin-bottom: 10px;
  display: inline-block;
}


@media only screen and (max-width: 1025px) {
  #app {
    margin: 0;
  }

  .quote {
    width: auto;
    margin: 0; 
  }

  .quote-author {
    padding-right: 0;
  }

  .quote-text {
    font-size: 36px;
  }

  .container {
    margin: 30px;
    width: auto;
  }

  h1 {
    width: 100%;
  }
}
</style>
