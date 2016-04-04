package fr.afcepf.al26.ria.controler;

import fr.afcepf.al26.ria.data.IDaoPersonnage;
import fr.afcepf.al26.ria.entities.Personnage;
import fr.afcepf.al26.ria.exception.DisneyException;
import fr.afcepf.al26.ria.impl.DaoPersonnageImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Stagiaire on 16/03/2016.
 */
@WebServlet("/ServletAjoutPersonnage")
public class ServletAjoutPersonnage extends HttpServlet {
    private IDaoPersonnage dao = new DaoPersonnageImpl();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPerform(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPerform(request, response);
    }

    private void doPerform(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        request.setCharacterEncoding("utf-8");
        String nom = request.getParameter("nom");
        String espece = request.getParameter("espece");
        String anime = request.getParameter("anime");
        String message = "Ca fonctionne pas !!";
        try {
            Date naissance = sdf.parse(request.getParameter("naissance"));
            Personnage personnage = new Personnage(nom, espece, anime, naissance);
            personnage = dao.ajouter(personnage);
            message = "personnage n°"+ personnage.getId()+" inseré";
        } catch (ParseException | DisneyException paramE) {
            message = "date au mauvais format ou probleme lors de l'ajout";
            paramE.printStackTrace();
        }
        request.setAttribute("message",message);
        response.setContentType("text/plain;charset=utf-8");
        response.setCharacterEncoding("UTF-8");
        request.getRequestDispatcher("/WEB-INF/reponseAjout.jsp").forward(request, response);
    }
}
