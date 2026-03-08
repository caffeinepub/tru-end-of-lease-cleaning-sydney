import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type ServiceType = {
    #endOfLeaseClean;
    #carpetClean;
    #commercialClean;
    #other;
  };

  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  let admin = Principal.fromText("2vxsx-fae");
  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, serviceType : ServiceType, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp = Time.now();
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (caller != admin) { Runtime.trap("Only admin can access this function") };
    enquiries.values().toArray();
  };
};
