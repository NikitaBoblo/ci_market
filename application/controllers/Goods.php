<?php
//defined('BASEPATH') OR exit('No direct script access allowed');

class Goods extends CI_Controller {


	public function index()
	{
	    $this->load->model('goods_model');
        $res = $this->goods_model->getProducts();
        $data['result'] = $res;
//        echo '<pre>';
//        print_r($data);
//        echo '</pre>';

        $this->load->view('templates/header');
		$this->load->view('goods', $data);
		$this->load->view('templates/main_form');
		$this->load->view('templates/error_message');
		$this->load->view('templates/footer');



    }

    public function getGood()
    {
        if (!$this->input->post('id')){
            echo 'wrong';
        } else {
            $this->load->model('goods_model');
            if (!$this->input->post('method')){
                $data = $this->goods_model->getProducts($this->input->post('id'));
            } else {
                $data = $this->goods_model->getProducts(
                    $this->input->post('id'),
                    $this->input->post('method')
                    );
            }
            echo json_encode($data);
        }
    }

	public function addGood()
    {
        if (!$this->input->post('name') || !$this->input->post('text')){
            echo 'wrong';
        } else {
            $this->load->model('goods_model');
            $data = $this->goods_model->addProduct($this->input->post());

            echo json_encode($data);
        }

    }

    public function deleteGood(){

        if (!$this->input->post('id')){
            echo 'wrong';
        } else {
            $this->load->model('goods_model');
            $data = $this->goods_model->deleteProduct($this->input->post());

            echo json_encode($data);
        }

    }


    public function updateGood(){

        if (!$this->input->post('id') || !$this->input->post('name') || !$this->input->post('text')){
            echo 'wrong';
        } else {

            $this->load->model('goods_model');
            $data = $this->goods_model->updateProduct($this->input->post());

            echo json_encode($data);

        }

    }

    public function test(){



    }

}
