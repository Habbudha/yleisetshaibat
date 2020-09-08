package ht2;

import java.io.IOException;

import fi.jyu.mit.fxgui.ModalController;
import fi.jyu.mit.fxgui.ModalControllerInterface;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class Ls1kirjController implements ModalControllerInterface<String> {
    @FXML
    private TextField tunnusfield;
    private String tns = null;

    @FXML
    private PasswordField ssfield;
    private String ss = null;
    
    @FXML
    private Label lblStatus;
    
    @FXML
    private void kirjaudu(ActionEvent event) throws IOException {
    tns = tunnusfield.getText();
    ss = ssfield.getText();
    if(tns.equals("Dude") && ss.equals("salasana")) {
    	FXMLLoader ldr = new FXMLLoader(getClass().getResource("Ls1kayttisView.fxml"));
        final Pane root = ldr.load();
        //final Ls1kayttisController ls1kayttisCtrl = (Ls1kayttisController) ldr.getController();
        Scene scene = new Scene(root);
        scene.getStylesheets().add(getClass().getResource("ls1kayttis.css").toExternalForm());
        Stage primaryStage = new Stage();
		primaryStage .setScene(scene);
        primaryStage.setTitle("ls1kayttis");
        primaryStage.show();
        Stage sulkeutuva = (Stage) tunnusfield.getScene().getWindow();
        sulkeutuva.close();
    }
    else {
    	lblStatus.setText("V‰‰r‰ salasana tai tunnus");
    }
    }



		

	@Override
	public void setDefault(String oletus) {
	tunnusfield.setText(oletus);
		
	}

	@Override
	public void handleShown() {
		// TODO Auto-generated method stub
		
	}





	@Override
	public String getResult() {
		// TODO Auto-generated method stub
		return null;
	}

		 }
	
