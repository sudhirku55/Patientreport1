package com.example.patientreport1.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Patients {
	@Id
	private ObjectId _id;
	private String name;
	private String group;
	public String get_id() {
		return _id.toHexString();
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	
	
	

}
