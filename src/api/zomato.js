import React,{useState} from 'react';
import axios from 'axios';

const key="b88d4aa175cedd16f2ca4e83494af1d8";

const zomato=()=>
{
	return axios({
	method:"GET",
	url: "https://developers.zomato.com/api/v2.1/dailymenu",
	headers:
	{
		'user-key':key,
		'content-type':'application/json',
	},
	params:
	{
		"res_id":"16507624",
	}
});
}
export default zomato;
