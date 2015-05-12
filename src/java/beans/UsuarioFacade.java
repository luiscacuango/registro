/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

import entidades.Usuario;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.primefaces.context.RequestContext;

/**
 *
 * @author luigi
 */
@Stateless
public class UsuarioFacade extends AbstractFacade<Usuario> {
    @PersistenceContext(unitName = "RegistroPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }
    
    public Usuario findByUsuCorreo(String correo) {
        List<Usuario> us = em.createNamedQuery("Usuario.findByUsuCorreo", Usuario.class).setParameter("usuCorreo", correo).getResultList();
        Usuario us2 = null;
        System.out.println("us2" + us2);
        if (us.size() > 0) {
            us2 = us.get(0);
        }
        return us2;
    }
        
}
