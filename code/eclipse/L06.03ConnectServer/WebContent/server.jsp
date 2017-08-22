<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

String aStr = request.getParameter("a");
String bStr = request.getParameter("b");

if(aStr==null||bStr==null){
	out.print("参数错误");
}else{
	out.print(Integer.parseInt(aStr)+Integer.parseInt(bStr));
}

%>