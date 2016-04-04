<%--
  Created by IntelliJ IDEA.
  User: Stagiaire
  Date: 16/03/2016
  Time: 10:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<strong>
    <%= request.getAttribute("id")%>
    <%= request.getAttribute("nom")%>
    <%= request.getAttribute("espece")%>
</strong>
</html>
