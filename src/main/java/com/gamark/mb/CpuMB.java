/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gamark.mb;

import com.gamark.ejb.CpuFacade;
import com.gamark.jpa.Cpu;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;

/**
 *
 * @author Maraoui
 */
@Named(value = "cpu")
@SessionScoped
public class CpuMB implements Serializable {

    @EJB
    private CpuFacade cpuEJB;
    
    /**
     * Creates a new instance of CpuMB
     */
    public CpuMB() {
    }
    
    public List<Cpu> getCpus() {
        return cpuEJB.findAll();
    }
    
}
