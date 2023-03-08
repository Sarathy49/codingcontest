package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TicketModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String splace;
	private String eplace;
	private int tdate;
	private String phno;
	public TicketModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TicketModel(int id, String name, String splace, String eplace, int tdate, String phno) {
		super();
		this.id = id;
		this.name = name;
		this.splace = splace;
		this.eplace = eplace;
		this.tdate = tdate;
		this.phno = phno;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSplace() {
		return splace;
	}
	public void setSplace(String splace) {
		this.splace = splace;
	}
	public String getEplace() {
		return eplace;
	}
	public void setEplace(String eplace) {
		this.eplace = eplace;
	}
	public int getTdate() {
		return tdate;
	}
	public void setTdate(int tdate) {
		this.tdate = tdate;
	}
	public String getPhno() {
		return phno;
	}
	public void setPhno(String phno) {
		this.phno = phno;
	}
	

}
