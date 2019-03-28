package com.example.patientreport1.models;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

	@Controller
	public class Logincontroller {
	 
	    @RequestMapping(value = "/create",method = RequestMethod.GET)
	    
	    public String index() {
	        return "index.html";
	    }
	}

