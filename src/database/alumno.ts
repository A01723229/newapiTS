class AlumnoDB {
    alumnos = [["A0082192", "Rodrigo Garza", 92, false ,''], 
                ["A0083171", "Alberto Fuentes", 98, true, ''],
                ["A0085211", "Alberto Fuentes", 70, true, ''], 
                ["A0087513", "Alberto Fuentes", 60, false, ''], 
                ["A0089827", "Alberto Fuentes", 60, true, '']]
    async GetAll(){
        return this.alumnos;
    }
}
export default new AlumnoDB;