package ht2;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.fxml.FXMLLoader;


/**
 * @author Akira
 * @version 31.1.2018
 *
 */
public class Ls1kayttisMain extends Application {
    @Override
    public void start(Stage primaryStage) {
        try {
            FXMLLoader ldr = new FXMLLoader(getClass().getResource("Ls1Ki.fxml"));
            final Pane root = ldr.load();
            //final Ls1kayttisController ls1kayttisCtrl = (Ls1kayttisController) ldr.getController();
            Scene scene = new Scene(root);
            scene.getStylesheets().add(getClass().getResource("ls1kayttis.css").toExternalForm());
            primaryStage.setScene(scene);
            primaryStage.setTitle("Kirjautuminen");
            primaryStage.show();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * @param args Ei käytössä
     */
    public static void main(String[] args) {
        launch(args);
    }
}