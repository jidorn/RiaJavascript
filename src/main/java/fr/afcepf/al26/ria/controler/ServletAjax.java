package fr.afcepf.al26.ria.controler;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Stagiaire on 16/03/2016.
 */
@WebServlet("/ServletAjax")
public class ServletAjax extends HttpServlet {
    private static final long serialVersionUID = 1L;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPerform(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPerform(request, response);
    }
    private void doPerform(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
        request.setCharacterEncoding("utf-8");
        String pascal = request.getParameter("toto");
        pascal = pascal.toUpperCase();
        request.setAttribute("pascal", pascal);
        response.setContentType("text/plain;charset=utf-8");
        response.setCharacterEncoding("UTF-8");
        request.getRequestDispatcher("/WEB-INF/raiponce.jsp").forward(request,response);
    }
}
