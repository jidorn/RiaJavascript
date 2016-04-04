package fr.afcepf.al26.ria.controler;

import fr.afcepf.al26.ria.data.IDaoPersonnage;
import fr.afcepf.al26.ria.entities.Personnage;
import fr.afcepf.al26.ria.impl.DaoPersonnageImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Stagiaire on 16/03/2016.
 */
@WebServlet("/ServletRecherchePersonnage")
public class ServletRecherchePersonnage extends HttpServlet {
    IDaoPersonnage dao = new DaoPersonnageImpl();
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPerform(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPerform(request, response);
    }
    private void doPerform(HttpServletRequest request, HttpServletResponse response)
            throws ServletException,IOException {
        request.setCharacterEncoding("utf-8");
        String anime = request.getParameter("anime");
        List<Personnage> personnageList = dao.rechercher(anime);
        request.setAttribute("liste",personnageList);
        request.getRequestDispatcher("/WEB-INF/reponseRecherche.jsp").forward(request,response);
    }
}
