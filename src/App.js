import React, {Component} from 'react';
import TabsInterface from './TabsInterface';
import Background from './Background';

const API = 'http://localhost:3000/api/v1/';
const DEFAULT_QUERY = 'pokemons';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
    }

    render() {

      return (
        <div className="App">
          <header className="Pokedex-App"></header>
            <h1 className="App-title">
              Hello World
            </h1>
              <p className="App-intro">
                  Welcome to my FAN~foxtrotting~tabulous pokedex APP</p>          

              <%= form_for(@product) do |f| %>
              <% if @product.errors.any? %>
              <div id ="error_explanation">
              <h2><%= pluralize(@product.errors.count, "error") %>
              prohibited this product from being saved:</h2>

              <ul>
              <% @product.erros.full_messages.each do |msg| %>
                <li><%= msg %></li>
              <% end %>
              </ul>
            </div>
          <% end %>

          <div class="field">
            <%= f.label :title %><br>
            <%= f.text_field :title %>
          </div>
          <div class="field">
            <%= f.label :description %><br>
            <%= f.text_area :description, rows: 6 %>
          </div>
          <div class="field">
            <%= f.label :image_url %><br>
            <%= f.text_field :image_url %>
          </div>
          <div class="field">
            <%= f.label :gender %><br>
            <%= f.text_field :gender %>
          </div>
          <div class="actions">
            <%= f.submit %>
          </div>
        <% end %>

            <TabsInterface />

            {/*<Background />*/}

        </div>
      );
    }
}


export default App;
