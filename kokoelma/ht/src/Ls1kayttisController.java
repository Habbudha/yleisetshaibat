package ht;

import java.util.Optional;

import fi.jyu.mit.fxgui.Dialogs;
import fi.jyu.mit.fxgui.ModalController;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Dialog;

/**
 * @author Akira
 * @version 31.1.2018
 *
 */

//* T‰ss‰ kohtaa testailin miten saada dialogi-ikkuna n‰kym‰‰n, Alert ominaisuus pit‰isi olla jo JavaFx 8:sissa, mutta kurssin tarjoamasta versiosta en tied‰ joten erroria heitt‰‰
public class Ls1kayttisController {
	
	@FXML private void handleMuokkaus() {
		tallenna();
	}
	@FXML private void handleKuittaus() {
		kuittaa();
	}
	@FXML private void handlePoisto() {
		poista();
	}
	@FXML private void handleLisaa() {
		lisaa();
	}
	
	
	
	
	
	/* Toiminnallisuus */
	private void tallenna() {
		Dialogs.showMessageDialog("Tallennetetaan! Mutta ei toimi viel‰");
	}
	private void kuittaa() {
		Dialogs.showMessageDialog("Kuitataan! Mutta ei toimi viel‰");
	}
	private void poista() {
		Dialogs.showMessageDialog("Poistetaan! Mutta ei toimi viel‰");
	}
	private void lisaa() {
	        ModalController.showModal(Ls1kayttisController.class.getResource("Ls1lv.fxml"), "Lis‰‰", null, "");
	
	 }
	

}