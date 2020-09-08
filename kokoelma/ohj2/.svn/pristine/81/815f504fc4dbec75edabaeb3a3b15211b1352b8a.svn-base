package ht2;

import java.io.IOException;
import java.net.URL;
import java.util.Optional;
import java.util.ResourceBundle;

import fi.jyu.mit.fxgui.Dialogs;
import fi.jyu.mit.fxgui.ListChooser;
import fi.jyu.mit.fxgui.ModalController;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Dialog;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;

/**
 * @author Akira
 * @version 31.1.2018
 *
 */

//* T‰ss‰ kohtaa testailin miten saada dialogi-ikkuna n‰kym‰‰n, Alert ominaisuus pit‰isi olla jo JavaFx 8:sissa, mutta kurssin tarjoamasta versiosta en tied‰ joten erroria heitt‰‰
public class Ls1kayttisController extends Ls1Velalliset  {
	
	@FXML private void handleMuokkaus() {
		tallenna();
	}
	@FXML private void handleKuittaus() {
		kuittaa();
	}
	@FXML private void handlePoisto() {
		poista();
	}
	@FXML private void handleLisaa() throws IOException {
		lisaa();
	}
	@FXML private void handleKlikattu() {
		klikattu();
	}
    @FXML
    private TextField txtNimi;
    

    @FXML
    private TextField txtSumma;
    

    @FXML
    private TextField txtNumero;

    @FXML
    private TextField txtSmaksupvm;
    @FXML
    private TextField hakuKentta;

    @FXML
    private ListChooser<Ls1Velallinen> listaVelallisista;
    
    private KokoVelka velallinen;
    private Ls1Velallinen velallinenkohdalla;

	
	
	
	
	
	
	/* Toiminnallisuus */
    private void klikattu() {
    	velallinenkohdalla = listaVelallisista.getSelectedObject();
    	
    	if(velallinen == null ) return;
    	
    	String nimi = velallinenkohdalla.getNimi();
    	String numero = String.valueOf(velallinenkohdalla.getNumero());
    	int id = velallinenkohdalla.getId();
    	
    	txtNimi.setText(nimi);
    	txtNumero.setText(numero);
    	
    	
    }
    
	private void tallenna() {
		Dialogs.showMessageDialog("Tallennetetaan! Mutta ei toimi viel‰");
	}
	private void kuittaa() {
		Dialogs.showMessageDialog("Kuitataan! Mutta ei toimi viel‰");
	}
	private void poista() {
		Dialogs.showMessageDialog("Poistetaan! Mutta ei toimi viel‰");
	}
	private void lisaa() throws IOException {
		FXMLLoader ldr = new FXMLLoader(getClass().getResource("Ls1lv.fxml"));
        final Pane root = ldr.load();
        //final Ls1kayttisController ls1kayttisCtrl = (Ls1kayttisController) ldr.getController();
        Scene scene = new Scene(root);
        scene.getStylesheets().add(getClass().getResource("ls1kayttis.css").toExternalForm());
        Stage primaryStage = new Stage();
		primaryStage .setScene(scene);
        primaryStage.setTitle("ls1kayttis");
        primaryStage.show();
     
	
	 }
	
	/*
	private void paivitaKentat(int id) throws IOException {
		
				
		//Lis‰‰ puhelinnumeron
		Ls1Velallinen[] velalliset = Ls1Velalliset.velallistaulukko(tiedotTaulussa(), 0);
		String sisalto = Integer.toString(velalliset[id].getNumero());
		txtNumero.setText(sisalto);
		//Lis‰‰ nimen
		sisalto = velalliset[id].getNimi();
		txtNimi.setText(sisalto);*/
	
	private void alustaLista(Ls1Velallinen[] velalliset) {
		
		listaVelallisista.clear();
		listaVelallisista.addSelectionListener(e-> klikattu());
		
		
		
		
		int velallisia = velalliset.length;
		for(int i = 0; i < velallisia; i++) {
			
			String nimi = velalliset[i].getNimi();
			Ls1Velallinen olio = velalliset[i];
			listaVelallisista.add(nimi, olio);

		}
	}
	public void initialize() throws IOException {
		alustaLista(velallistaulukko(tiedotTaulussa()));
	}
		
	
	

}