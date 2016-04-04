<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Stagiaire
  Date: 16/03/2016
  Time: 16:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<div>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>nom</th>
            <th>espece</th>
            <th>anime</th>
            <th>naissance</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="personnage" items="${liste}">
            <tr>
                <td>${personnage.id}</td>
                <td>${personnage.nom}</td>
                <td>${personnage.espece}</td>
                <td>${personnage.dessinAnime}</td>
                <td>${personnage.dateNaissance}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</html>
