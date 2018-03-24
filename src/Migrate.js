import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Search from './Search';
import Create from './Create';
import Destroy from './Destroy';

class CreateProducts < ActiveRecord::Migration

	def change 
		create_table :products do |t|
		t.string :title
		t.text :description
		t.string :image_url
		t.string :gender, precision: 8, scale: 2

		t.timestamps
	end
  end
end