using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models {
    public class SampleOrder {
        public int ID { get; set; }
        public string FirstName { get; set;}
        public string LastName {  get; set;}
        public string Supervisor {  get; set;}
        public string Gender { get; set; }
        public string Position { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime StartedDate { get; set; }
    }
}
