<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
/* for(int i=0;i<100;i++){
	out.print(i+"<br/>");
} */
%>

<%

String aStr = request.getParameter("a");
String bStr = request.getParameter("b");

if(aStr==null||bStr==null){
	out.print("参数错误");
}else{
	out.print(Integer.parseInt(aStr)+Integer.parseInt(bStr));
}

%>

</body>
</html>