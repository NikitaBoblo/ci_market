<?php

class Goods_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

//    public function cut_text($text, $max_words = 50, $append = ' ...'){
//
//        $max_words = $max_words+1;
//        $words = explode(' ', $text, $max_words);
//        array_pop($words);
//        $text = implode(' ', $words) . $append;
//
//        return $text;
//    }

    public function getProducts($id = null, $meth = null) {

        if ($id == null) {
            $query = $this->db->get('products_tr');
            $to_return = $query->result();
        } else {
            $query = $this->db->get_where('products_tr', [ 'id' => $id ]);
            $to_return = $query->result();
        }

//        if ($meth == null){
//            foreach ($to_return as $row)
//            {
//                $row->text = $this->cut_text($row->text, 50, ' ...');
//            }
//        }



//        echo '<pre>';
//        print_r($query->result());
//        echo '</pre>';
//
//        foreach ($query->result() as $row){
//            echo "{$row->id} : {$row->name} : {$row->text} <br>";
//        }
//        exit();
        return $to_return;

    }

    public function addProduct($data) {


        $send_data = [
            'name' => $data['name'],
            'text' => $data['text']
        ];
        $this->db->insert('products_tr', $send_data);
        $send_data['id'] = $this->db->insert_id();
        return $send_data;

    }

    public function deleteProduct($data) {

        $query = $this->db->delete('products_tr', ['id' => $data['id']]);

        return $this->db->affected_rows();
    }

    public function updateProduct($data){

        $arr = [
            'name' => $data['name'],
            'text' => $data['text']
        ];

        $this->db->where('id', $data['id']);
        $query = $this->db->update('products_tr', $arr);

        return $this->db->affected_rows();

    }
}